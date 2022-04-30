import router, { asyncRoutes } from '@/router'
import settings from './settings.js'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })
import 'nprogress/nprogress.css'
import { usePermissionStore } from '@/store/permission'
import { getToken } from '@/utils/auth'
import { getPageTitle } from '@/utils'

const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
	// 加载 progress
	if (settings.isNeedNprogress) NProgress.start()
	// title 设置
	document.title = getPageTitle(to.meta.title)
	if (getToken()) {
		const permissionStore = usePermissionStore()
		// 权限判断预留
		let accessRoutes = []
		accessRoutes = asyncRoutes
		permissionStore.M_routes(accessRoutes)
		accessRoutes.forEach((route) => {
			router.addRoute(route)
		})
		if (settings.isNeedNprogress) NProgress.start()
		next()
	} else {
		if (whiteList.indexOf(to.path) !== -1) {
			next()
		} else {
			next('/login')
		}
	}
})
router.afterEach(() => {
	if (settings.isNeedNprogress) NProgress.done()
})
