import defaultSettings from '@/settings'

const title = defaultSettings.title || '乐居视后台管理端'

export const getPageTitle = (pageTitle) => {
	return pageTitle ? `${pageTitle}-${title}` : title
}
