import router, { asyncRoutes } from '@/router'
import settings from './settings.js'
import NProgress from 'nprogress'
NProgress.configure({ showSpinner: false })
import 'nprogress/nprogress.css'

const whiteList = ['/login', '/404']
router.beforeEach(async (to, from, next) => {
	if (settings.isNeedNprogress) NProgress.start()
	next()
})
router.afterEach(() => {
	if (settings.isNeedNprogress) NProgress.done()
})
