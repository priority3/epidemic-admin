import Layout from '@/layout'
import { createRouter, createWebHashHistory } from 'vue-router'
export const constantRoutes = [
	{
		path: '/redirect',
		component: Layout,
		hidden: true,
		children: [
			{
				path: '/redirect/:path(.*)',
				component: () => import('@/views/redirect')
			}
		]
	},
	{
		path: '/login',
		component: () => '@/views/login/index.vue',
		hidden: true
	},
	{
		path: '/404',
		component: () => import('@/views/404.vue'),
		hidden: true
	},
	{
		path: '/',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: 'home',
				name: 'Home',
				component: () => import('@/views/home/index.vue'),
				meta: { title: '主页', elSvgIcon: 'Fold' }
			}
		]
	},
	{
		path: '/',
		component: Layout,
		redirect: '/redirect',
		children: [
			{
				path: 'test',
				name: 'Test',
				component: () => import('@/views/test/index.vue'),
				meta: { title: '测试', elSvgIcon: 'Fold' }
			}
		]
	},
	{ path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

export const asyncRoutes = [{ path: '/:pathMatch(.*)', redirect: '/404', hidden: true }]

const router = createRouter({
	history: createWebHashHistory(),
	scrollBehavior: () => ({ top: 0 }),
	routes: constantRoutes
})

export default router
