import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'MUSHU-WRNA',
    lpAddresses: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
    multiplier: "50X",
  },
  {
    pid: 1,
    lpSymbol: 'MUSHU-WRNA',
    lpAddresses: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    token: tokens.test,
    quoteToken: tokens.wbnb,
    multiplier: "50X",
  },
  {
    pid: 2,
    lpSymbol: 'MUSHU-USDT',
    lpAddresses: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    token: tokens.cake,
    quoteToken: tokens.usdt,
    multiplier: "50X",
  },
  {
    pid: 3,
    lpSymbol: 'USDT-VBC',
    lpAddresses: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    token: tokens.usdt,
    quoteToken: tokens.vbc,
    multiplier: "20X",
  },
  {
    pid: 3,
    lpSymbol: 'NOVA-VBC',
    lpAddresses: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    token: tokens.nova,
    quoteToken: tokens.vbc,
    multiplier: "20X",
  },
  {
    pid: 3,
    lpSymbol: 'WRNA-NOVA',
    lpAddresses: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    token: tokens.wbnb,
    quoteToken: tokens.nova,
    multiplier: "20X",
  },
]

export default farms
