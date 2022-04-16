import router, { asyncRoutes } from '@/router'
import settings from './settings.js'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })
import 'nprogress/nprogress.css'
import { usePermissionStore } from '@/store/permission'

const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
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
})
router.afterEach(() => {
	if (settings.isNeedNprogress) NProgress.done()
})
