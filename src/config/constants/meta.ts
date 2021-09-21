import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MuShu',
  description:
    'MuShu Finance',
  image: 'https://mushu.finance/meta.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MuShu')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MuShu')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MuShu')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MuShu')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MuShu')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MuShu')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('MuShu')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MuShu')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MuShu')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('MuShu')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('MuShu')}`,
      }
    default:
      return null
  }
}
