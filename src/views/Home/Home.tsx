import Page from 'components/Layout/Page'
import {useTranslation} from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import {BaseLayout, Heading} from 'uikit'
import CakeStats from 'views/Home/components/CakeStats'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import EarnAPRCard from './components/EarnAPRCard'
import StakeCard from './components/StakeCard'
import TwitterCard from './components/TwitterCard'
import {CopyOutlined} from '@ant-design/icons';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import useToast from "../../hooks/useToast";

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/pan-bg-mobile.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;
  
  .contract{
    margin-bottom:30px;
    word-wrap: anywhere;
    a{
       color: #e85b24;
    }
  }

  ${({theme}) => theme.mediaQueries.lg} {
    // background-image: url('/images/pan-bg2.svg'), url('/images/pan-bg.svg');
    // background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({theme}) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
    const {t} = useTranslation()
    // const { currentLotteryPrize } = useFetchLotteryForPromos()
    const {toastSuccess} = useToast()
    return (
        <>
            <Page>
                <Hero>
                    <div className="contract">
                        Mushu Contract:
                        <a href="https://scan.genechain.io/address/0x5482e669Eb8eA3B4EE1ff5eCe48D343195a90Dab"
                           target="_blank"
                        >
                        0x5482e669Eb8eA3B4EE1ff5eCe48D343195a90Dab
                    </a>
                        <CopyToClipboard
                            text="0x5482e669Eb8eA3B4EE1ff5eCe48D343195a90Dab"
                            onCopy={() => toastSuccess("Copy address success !!")}
                        >
                            <CopyOutlined/>
                        </CopyToClipboard>
                    </div>
                    <Heading as="h1" scale="xl" mb="24px" color="secondary">
                        {t('Mushu Finance')}
                    </Heading>
                    <Heading scale="md" color="text">
                        {t(`A decentralized hybrid yield earning with value-optimized, economically sustainable running on the GeneChain blockchain.`)}
                    </Heading>
                </Hero>
                <div>
                    <Cards>
                        <FarmStakingCard/>
                        <TwitterCard/>
                    </Cards>
                    <Cards>
                        <EarnAPRCard/>
                        <StakeCard/>
                    </Cards>
                    <Cards>
                        <CakeStats/>
                        <TotalValueLockedCard/>
                    </Cards>
                </div>
            </Page>
        </>
    )
}

export default Home
