import { ChainId, Token } from 'sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x123eFf8f4471594020259C83025d529cCbFac5b8',
    18,
    'MUSHU',
    'Mushu Finance',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xDde802F299e992a35d8Cee3F2404D7E749eD8aCB',
    18,
    'MUSHU',
    'Mushu Fiancne',
  ),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0x35274271db5193160A02b81826C9272eE01F5B9C', 18, 'WRNA', 'Wrapped RNA')
export const DAI = new Token(ChainId.MAINNET, '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', 18, 'DAI', 'Dai Stablecoin')
export const USDT = new Token(ChainId.MAINNET, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD')
export const BTCB = new Token(ChainId.MAINNET, '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', 18, 'BTCB', 'Binance BTC')
export const UST = new Token(
  ChainId.MAINNET,
  '0x23396cF899Ca06c4472205fC903bDB4de249D6fC',
  18,
  'UST',
  'Wrapped UST Token',
)
export const ETH = new Token(
  ChainId.MAINNET,
  '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  18,
  'ETH',
  'Binance-Peg Ethereum Token',
)
export const USDC = new Token(
  ChainId.MAINNET,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
)

const tokens = {
  bnb: {
    symbol: 'RNA',
    projectLink: 'https://genechain.io',
  },
  cake: {
    symbol: 'MUSHU',
    address: {
      80: '0x123eFf8f4471594020259C83025d529cCbFac5b8',
      8080: '0xDde802F299e992a35d8Cee3F2404D7E749eD8aCB',
    },
    decimals: 18,
    projectLink: 'https://mushu.finance/',
  },
  wbnb: {
    symbol: 'WRNA',
    address: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    decimals: 18,
    projectLink: '#',
  },
  test: {
    symbol: 'MUSHU',
    address: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    decimals: 18,
    projectLink: '#',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    decimals: 18,
    projectLink: '#',
  },
  vbc: {
    symbol: 'VBC',
    address: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    decimals: 18,
    projectLink: '#',
  },
  nova: {
    symbol: 'NOVA',
    address: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    decimals: 18,
    projectLink: '#',
  },
  lend: {
    symbol: 'LEND',
    address: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    decimals: 18,
    projectLink: '#',
  },
}

export default tokens
