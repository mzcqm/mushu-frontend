import tokens from 'config/constants/tokens'
import { Address } from './types'

const { cake } = tokens

interface WarningToken {
  symbol: string
  address: Address
}

interface WarningTokenList {
  [key: string]: WarningToken
}

const SwapWarningTokens = <WarningTokenList>{
  cake
}

export default SwapWarningTokens
