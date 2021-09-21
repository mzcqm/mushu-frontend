import React from 'react'
import { Card, CardBody, Heading } from 'uikit'
import styled from 'styled-components'
import { Timeline } from 'react-twitter-widgets'
import { useTranslation } from 'contexts/Localization'

const StyledTwitterCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  iframe{
      width: 100% !important;
  }
//     border: solid 5px #fdd35b;
//   -webkit-box-shadow: 0px 0px 0px 5px rgba(72,27,19,1);
//   -moz-box-shadow: 0px 0px 0px 5px rgba(72,27,19,1);
//   box-shadow: 0px 0px 0px 5px rgba(72,27,19,1);
//   border-radius: 15px
`

const TwitterCard = () => {
  const {t} = useTranslation()
  return (
    <StyledTwitterCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('News')}
        </Heading>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: '',
          }}
          options={{
            height: '300',
            chrome: 'noheader, nofooter',
            width: '400',
          }}
        />
      </CardBody>
    </StyledTwitterCard>
  )
}

export default TwitterCard
