import defaultSettings from '@/settings'

const title = defaultSettings.title || '新浪分期管理平台'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
