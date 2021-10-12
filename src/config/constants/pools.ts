import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.mushu,
    earningToken: tokens.mushu,
    contractAddress: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: tokens.wrna,
    earningToken: tokens.mushu,
    contractAddress: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.usdt,
    earningToken: tokens.mushu,
    contractAddress: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.nova,
    earningToken: tokens.mushu,
    contractAddress: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.vbc,
    earningToken: tokens.mushu,
    contractAddress: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.lend,
    earningToken: tokens.mushu,
    contractAddress: {
      80: '0x0000000000000000000000000000000000000000',
      8080: '0x0000000000000000000000000000000000000000',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
