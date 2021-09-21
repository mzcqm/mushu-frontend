import React from 'react'
import { Card, CardBody, Heading, Text } from 'uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Mushu Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{t('Total Supply')}</Text>
          {/* <CardValue fontSize="14px" value={cakeSupply} /> */}
          N/A
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Minted')}</Text>
          {/* <CardValue fontSize="14px" value={0} /> */}
          N/A
        </Row>
        <Row>
          <Text fontSize="14px">{t('Total Burned')}</Text>
          {/* <CardValue fontSize="14px" decimals={0} value={burnedBalance} /> */}
          N/A
        </Row>
        <Row>
          <Text fontSize="14px">{t('New MUSHU/block')}</Text>
          {/* <CardValue fontSize="14px" decimals={0} value={1000} /> */}
          N/A
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
