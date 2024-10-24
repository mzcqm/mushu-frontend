import React, {useEffect, useMemo, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import {useWeb3React} from '@web3-react/core'
import {Flex, Heading, Text} from 'uikit'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import {useTranslation} from 'contexts/Localization'
import usePersistState from 'hooks/usePersistState'
import {useCakeVault, useFetchCakeVault, useFetchPublicPoolsData, usePools} from 'state/pools/hooks'
import {usePollFarmsData} from 'state/farms/hooks'
import {latinise} from 'utils/latinise'
import FlexLayout from 'components/Layout/Flex'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import {OptionProps} from 'components/Select/Select'
import {Pool} from 'state/types'
import Loading from 'components/Loading'
import PoolCard from './components/PoolCard'
import PoolsTable from './components/PoolsTable/PoolsTable'
import {ViewMode} from './components/ToggleView/ToggleView'
import {getAprData, getCakeVaultEarnings} from './helpers'

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

const PoolControls = styled(Flex)`
  flex-direction: column;
  margin-bottom: 24px;
  ${({theme}) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const SearchSortContainer = styled(Flex)`
  gap: 10px;
  justify-content: space-between;
`

const ControlStretch = styled(Flex)`
  > div {
    flex: 1;
  }
`

const NUMBER_OF_POOLS_VISIBLE = 12

const Pools: React.FC = () => {
    const location = useLocation()
    const {t} = useTranslation()
    const {account} = useWeb3React()
    const {pools: poolsWithoutAutoVault, userDataLoaded} = usePools(account)
    const [stakedOnly, setStakedOnly] = usePersistState(false, {localStorageKey: 'pancake_pool_staked'})
    const [numberOfPoolsVisible, setNumberOfPoolsVisible] = useState(NUMBER_OF_POOLS_VISIBLE)
    const [observerIsSet, setObserverIsSet] = useState(false)
    const loadMoreRef = useRef<HTMLDivElement>(null)
    const [viewMode, setViewMode] = usePersistState(ViewMode.CARD, {localStorageKey: 'pancake_farm_view'})
    const [searchQuery, setSearchQuery] = useState('')
    const [sortOption, setSortOption] = useState('hot')
    const chosenPoolsLength = useRef(0)
    const {
        userData: {cakeAtLastUserAction, userShares},
        fees: {performanceFee},
        pricePerFullShare,
        totalCakeInVault,
    } = useCakeVault()
    const accountHasVaultShares = userShares && userShares.gt(0)
    const performanceFeeAsDecimal = performanceFee && performanceFee / 100

    const pools = useMemo(() => {
        const cakePool = poolsWithoutAutoVault.find((pool) => pool.sousId === 0)
        const cakeAutoVault = {...cakePool, isAutoVault: true}
        return [cakeAutoVault, ...poolsWithoutAutoVault]
    }, [poolsWithoutAutoVault])

    // TODO aren't arrays in dep array checked just by reference, i.e. it will rerender every time reference changes?
    const [finishedPools, openPools] = useMemo(() => partition(pools, (pool) => pool.isFinished), [pools])
    const stakedOnlyFinishedPools = useMemo(
        () =>
            finishedPools.filter((pool) => {
                if (pool.isAutoVault) {
                    return accountHasVaultShares
                }
                return pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
            }),
        [finishedPools, accountHasVaultShares],
    )
    const stakedOnlyOpenPools = useMemo(
        () =>
            openPools.filter((pool) => {
                if (pool.isAutoVault) {
                    return accountHasVaultShares
                }
                return pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0)
            }),
        [openPools, accountHasVaultShares],
    )
    const hasStakeInFinishedPools = stakedOnlyFinishedPools.length > 0

    usePollFarmsData()
    useFetchCakeVault()
    useFetchPublicPoolsData()

    useEffect(() => {
        const showMorePools = (entries) => {
            const [entry] = entries
            if (entry.isIntersecting) {
                setNumberOfPoolsVisible((poolsCurrentlyVisible) => {
                    if (poolsCurrentlyVisible <= chosenPoolsLength.current) {
                        return poolsCurrentlyVisible + NUMBER_OF_POOLS_VISIBLE
                    }
                    return poolsCurrentlyVisible
                })
            }
        }

        if (!observerIsSet) {
            const loadMoreObserver = new IntersectionObserver(showMorePools, {
                rootMargin: '0px',
                threshold: 1,
            })
            loadMoreObserver.observe(loadMoreRef.current)
            setObserverIsSet(true)
        }
    }, [observerIsSet])

    const showFinishedPools = location.pathname.includes('history')

    const handleChangeSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value)
    }

    const handleSortOptionChange = (option: OptionProps): void => {
        setSortOption(option.value)
    }

    const sortPools = (poolsToSort: Pool[]) => {
        switch (sortOption) {
            case 'apr':
                // Ternary is needed to prevent pools without APR (like MIX) getting top spot
                return orderBy(
                    poolsToSort,
                    (pool: Pool) => (pool.apr ? getAprData(pool, performanceFeeAsDecimal).apr : 0),
                    'desc',
                )
            case 'earned':
                return orderBy(
                    poolsToSort,
                    (pool: Pool) => {
                        if (!pool.userData || !pool.earningTokenPrice) {
                            return 0
                        }
                        return pool.isAutoVault
                            ? getCakeVaultEarnings(
                                account,
                                cakeAtLastUserAction,
                                userShares,
                                pricePerFullShare,
                                pool.earningTokenPrice,
                            ).autoUsdToDisplay
                            : pool.userData.pendingReward.times(pool.earningTokenPrice).toNumber()
                    },
                    'desc',
                )
            case 'totalStaked':
                return orderBy(
                    poolsToSort,
                    (pool: Pool) => (pool.isAutoVault ? totalCakeInVault.toNumber() : pool.totalStaked.toNumber()),
                    'desc',
                )
            default:
                return poolsToSort
        }
    }

    let chosenPools
    if (showFinishedPools) {
        chosenPools = stakedOnly ? stakedOnlyFinishedPools : finishedPools
    } else {
        chosenPools = stakedOnly ? stakedOnlyOpenPools : openPools
    }

    if (searchQuery) {
        const lowercaseQuery = latinise(searchQuery.toLowerCase())
        chosenPools = chosenPools.filter((pool) =>
            latinise(pool.earningToken.symbol.toLowerCase()).includes(lowercaseQuery),
        )
    }

    chosenPools = sortPools(chosenPools).slice(0, numberOfPoolsVisible)
    chosenPoolsLength.current = chosenPools.length
    const cardLayout = (
        <CardLayout>
            {chosenPools.map((pool) =>
                pool.isAutoVault ? (
                    <></>
                    // <CakeVaultCard key="auto-cake" pool={pool} showStakedOnly={stakedOnly} />
                ) : (
                    <PoolCard key={pool.sousId} pool={pool} account={account}/>
                ),
            )}
        </CardLayout>
    )

    const tableLayout = <PoolsTable pools={chosenPools} account={account} userDataLoaded={userDataLoaded}/>

    return (
        <>
            <PageHeader>
                <Heading as="h1" scale="xxl" color="secondary" mb="24px">
                    {t('Mushu’s Pools')}
                </Heading>
                <Heading scale="md" color="text">
                    {t('Mushu’s optimized yield earning strategies ensure you get some of the best competitive profit on your crypto assets in Genechain!')}
                </Heading>
            </PageHeader>
            <Page>

                {showFinishedPools && (
                    <Text fontSize="20px" color="failure" pb="32px">
                        {t('These pools are no longer distributing rewards. Please unstake your tokens.')}
                    </Text>
                )}
                {account && !userDataLoaded && stakedOnly && (
                    <Flex justifyContent="center" mb="4px">
                        <Loading/>
                    </Flex>
                )}
                {viewMode === ViewMode.CARD ? cardLayout : tableLayout}
                <div ref={loadMoreRef}/>
            </Page>
        </>
    )
}

export default Pools
