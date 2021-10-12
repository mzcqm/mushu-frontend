import {MenuEntry} from 'uikit'
import {ContextApi} from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
    {
        label: t('Home'),
        icon: 'HomeIcon',
        href: '/',
    },
    {
        label: t('Trade'),
        icon: 'TradeIcon',
        items: [
            {
                label: t('Exchange'),
                href: '/swap',
            },
            {
                label: t('Liquidity'),
                href: '/pool',
            },
        ],
    },
    {
        label: t('Farms'),
        icon: 'FarmIcon',
        href: '/farms',
    },
    // {
    //     label: t('Pools'),
    //     icon: 'PoolIcon',
    //     href: '/pools',
    // },
    {
        label: t('IDO'),
        icon: 'IdoIcon',
        href: '/ido',
    },
    {
        label: t('Invest'),
        icon: 'PredictionsIcon',
        href: '/invest'
    },
    {
        label: t('NFT'),
        icon: 'NftIcon',
        href: '/nft'
    },
    {
        label: t('Bridge'),
        icon: 'BridgeIcon',
        href: 'https://bridge.mushu.finance'
    },
    {
        label: t('Info'),
        icon: 'InfoIcon',
        items: [
            {
                label: t('Audit'),
                href: 'https://github.com/solidproof/smart-contract-audits/blob/main/SmartContract_Audit_Solidproof_MushuToken.pdf',
            }
        ],
    },
    {
        label: t('More'),
        icon: 'MoreIcon',
        items: [
            {
                label: t('Github'),
                href: 'https://github.com/mushufinance',
            },
            {
                label: t('Docs'),
                href: 'https://docs.mushu.finance',
            },
            {
                label: t('Whitepaper English'),
                href: 'https://mushu.finance/Mushu-WPP-English.pdf',
            },
            {
                label: t('Whitepaper Chinese'),
                href: 'https://mushu.finance/Mushu-WPP-Chinese.pdf',
            },
            {
                label: t('Twitter'),
                href: 'https://twitter.com/MushuFinance',
            },
            {
                label: t('Telegram Global'),
                href: 'https://t.me/mushufinance',
            },
            {
                label: t('Telegram Chinese'),
                href: 'https://t.me/mushucommunity_CHN',
            },
        ],
    },
]

export default config
