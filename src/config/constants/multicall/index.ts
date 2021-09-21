import { ChainId } from 'config/chainId'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x2CACD86A57D9536Fb58A6d81F5CE47194b7f6Ae9',
  [ChainId.TESTNET]: '0x123eFf8f4471594020259C83025d529cCbFac5b8',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
