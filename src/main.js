import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import settings from '@/settings'
// global scss
import '@/styles/index.scss'
// elementplus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus, {
	size: localStorage.getItem('size') || settings.defaultSize
})

//svg-icon
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
app.component('SvgIcon', svgIcon)

//element svg icon
import ElSvgIcon from '@/components/ElSvgIcon.vue'
app.component('ElSvgIcon', ElSvgIcon)

//pinia
import { createPinia } from 'pinia'
app.use(createPinia())

// permission
import './permission.js'

// router
import router from './router'
app.use(router)
app.mount('#app')
