import BigNumber from 'bignumber.js'
import {BIG_ONE, BIG_ZERO} from 'utils/bigNumber'
import {Farm} from 'state/types'

const getFarmBaseTokenPrice = (farm: Farm, farms: Farm[]): BigNumber => {

    if (farm.token.symbol === 'USDT') {
        return BIG_ONE
    }

    if (farm.token.symbol === 'NOVA') {
        const price = farms.find(i => i.pid == 6).tokenPriceVsQuote
        return new BigNumber(price)
    }

    if (farm.token.symbol === 'MUSHU') {
        const price = farms.find(i => i.pid == 0).tokenPriceVsQuote
        return new BigNumber(price)
    }

    if (farm.token.symbol === 'VBC') {
        const price = farms.find(i => i.pid == 5).tokenPriceVsQuote
        return new BigNumber(price)
    }

    if (farm.token.symbol === 'WRNA') {
        const price = farms.find(i => i.pid == 2).tokenPriceVsQuote
        return new BigNumber(price)
    }

    return BIG_ZERO
}

const getFarmQuoteTokenPrice = (farm: Farm, farms: Farm[]): BigNumber => {

    if (farm.quoteToken.symbol === 'USDT') {
        return BIG_ONE
    }

    if (farm.quoteToken.symbol === 'NOVA') {
        const novaPrice = farms.find(i => i.pid == 6).tokenPriceVsQuote
        return new BigNumber(novaPrice)
    }

    if (farm.quoteToken.symbol === 'MUSHU') {
        const price = farms.find(i => i.pid == 0).tokenPriceVsQuote
        return new BigNumber(price)
    }

    if (farm.quoteToken.symbol === 'VBC') {
        const price = farms.find(i => i.pid == 5).tokenPriceVsQuote
        return new BigNumber(price)
    }

    if (farm.quoteToken.symbol === 'WRNA') {
        const price = farms.find(i => i.pid == 2).tokenPriceVsQuote
        return new BigNumber(price)
    }

    return BIG_ZERO
}

const fetchFarmsPrices = async (farms) => {
    const farmsWithPrices = farms.map((farm) => {
        const baseTokenPrice = getFarmBaseTokenPrice(farm, farms)
        const quoteTokenPrice = getFarmQuoteTokenPrice(farm, farms)
        const token = {...farm.token, busdPrice: baseTokenPrice.toJSON()}
        const quoteToken = {...farm.quoteToken, busdPrice: quoteTokenPrice.toJSON()}
        return {...farm, token, quoteToken}
    })
    return farmsWithPrices
}

export default fetchFarmsPrices
