import { ChainId } from 'config/chainId'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://rpc.genechain.io',
  [ChainId.TESTNET]: 'https://rpc-testnet.genechain.io',
}

export default NETWORK_URLS
