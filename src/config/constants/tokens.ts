import { ChainId, Token } from 'sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x5482e669Eb8eA3B4EE1ff5eCe48D343195a90Dab',
    18,
    'MUSHU',
    'Mushu Finance',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xDFD6eB4B4522E57D1AE8dE73c05720AD512d78E5',
    18,
    'MUSHU',
    'Mushu Fiancne',
  ),
}

export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
      ChainId.MAINNET,
      '0x1Dc22853E8517c79058939Ae0DDBeF6d5e3c0199',
      6,
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

export const ETH = new Token(
  ChainId.MAINNET,
  '0x4DfC12BeEce828c46A8F19A2247a8615C47AefdA',
  18,
  'ETH',
  'Ethereum Token',
)

const tokens = {
  bnb: {
    symbol: 'RNA',
    projectLink: 'https://genechain.io',
  },
  mushu: {
    symbol: 'MUSHU',
    address: {
      80: '0x5482e669Eb8eA3B4EE1ff5eCe48D343195a90Dab',
      8080: '0xDFD6eB4B4522E57D1AE8dE73c05720AD512d78E5',
    },
    decimals: 18,
    projectLink: 'https://mushu.finance/',
  },
  wrna: {
    symbol: 'WRNA',
    address: {
      80: '0x35274271db5193160A02b81826C9272eE01F5B9C',
      8080: '0x35274271db5193160A02b81826C9272eE01F5B9C',
    },
    decimals: 18,
    projectLink: '#',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      80: '0x1Dc22853E8517c79058939Ae0DDBeF6d5e3c0199',
      8080: '0xb088E15d2cCeBb8Fe474faa43EE9657b3e85eA40',
    },
    decimals: 6,
    projectLink: '#',
  },
  vbc: {
    symbol: 'VBC',
    address: {
      80: '0xebe33f292a4f3fa9104a8d38a2cffd9fe3d2d277',
      8080: '0x843E0a2849126a5592bc74F16d58E91f9dDabaEC',
    },
    decimals: 18,
    projectLink: '#',
  },
  nova: {
    symbol: 'NOVA',
    address: {
      80: '0xb7a72452d0ce44683c7492289a48f315865cb4b3',
      8080: '0xb7a72452d0ce44683C7492289a48F315865cb4B3',
    },
    decimals: 18,
    projectLink: '#',
  },
  lend: {
    symbol: 'LEND',
    address: {
      80: '0x1589992c28120c8981c7360edbc7f68640718689',
      8080: '0x0Bb78E352af8231d471e37d4DBCB8A2811ABe22b',
    },
    decimals: 18,
    projectLink: '#',
  },
}

export default tokens
