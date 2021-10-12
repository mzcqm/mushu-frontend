import tokens from './tokens'
import {FarmConfig} from './types'

const farms: FarmConfig[] = [
    /**
     * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
     */
    {
        pid: 0,
        lpSymbol: 'MUSHU-USDT',
        lpAddresses: {
            80: '0x8491e3508965602c7d6c5fc52a4febd32f25cbfe',
            8080: '0xa351feca31f2905cb314ccb76510364230d08fcd',
        },
        token: tokens.mushu,
        quoteToken: tokens.usdt,
        multiplier: "40X",
        fee: "0.5"
    },
    {
        pid: 1,
        lpSymbol: 'MUSHU-VBC',
        lpAddresses: {
            80: '0x27ad6bb8ba1011df3c9d8026884927013a4c6f93',
            8080: '0x30b86803c4DF16fbA10c4bf6a055667207bDBf1E',
        },
        token: tokens.mushu,
        quoteToken: tokens.vbc,
        multiplier: "30X",
        fee: "0.5"
    },
    {
        pid: 2,
        lpSymbol: 'WRNA-USDT',
        lpAddresses: {
            80: '0x89c30d6b866df54722f30593a0038866bf9c69b9',
            8080: '0xC51E5DD803a52bfc7E1285dd579BFAee0d3e0eC5',
        },
        token: tokens.wrna,
        quoteToken: tokens.usdt,
        multiplier: "20X",
        fee: "1.5"
    },
    {
        pid: 3,
        lpSymbol: 'NOVA-VBC',
        lpAddresses: {
            80: '0xbc42eb905984a8e829bbdfde20f2c0953bab12ea',
            8080: '0x2A7Cd4f8426A501AfEd22F920F3adE9C3B2Cc42e',
        },
        token: tokens.nova,
        quoteToken: tokens.vbc,
        multiplier: "10X",
        fee: "1.5"
    },
    {
        pid: 4,
        lpSymbol: 'MUSHU-WRNA',
        lpAddresses: {
            80: '0x785290dfb5d8e2a8cc34ec9ef7dadad6fce95a7a',
            8080: '0x1725a5A2e12f277bD30538f444252D6DE7184990',
        },
        token: tokens.mushu,
        quoteToken: tokens.wrna,
        multiplier: "0X",
        fee: "0"
    },
    {
        pid: 5,
        lpSymbol: 'VBC-USDT',
        lpAddresses: {
            80: '0x79f7d01efa993f43cbaf8b3e00f75349880bcbdb',
            8080: '',
        },
        token: tokens.vbc,
        quoteToken: tokens.usdt,
        multiplier: "0X",
        fee: "0"
    },
    {
        pid: 6,
        lpSymbol: 'NOVA-USDT',
        lpAddresses: {
            80: '0x1840729d1ed19cd803c5b9d056bc93dfe72ec1dc',
            8080: '',
        },
        token: tokens.nova,
        quoteToken: tokens.usdt,
        multiplier: "0X",
        fee: "0"
    },
]

export default farms
