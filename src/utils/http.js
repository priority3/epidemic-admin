import axios from 'axios'
import { getToken, setToken } from './auth.js'

const http = axios.create()

// 请求拦截
http.interceptors.request.use(
	(request) => {
		if (getToken()) {
			request.headers['token'] = getToken()
		}
		// 将请求参数拼接到url上
		if (request.isParams) {
			let params = request.data
			request.params = params
			request.data = {}
		}
		// 上传文件
		if (request.isUploadFile) {
			request.headers['Content-Type'] = 'multipart/form-data'
		}
		// 下载文件 读取blo流
		/* download file*/
		if (request.isDownLoadFile) {
			request.responseType = 'blob'
		}
		return request
	},
	(err) => Promise.reject(err)
)

// 响应拉杰
http.interceptors.response.use((response) => {
	const { code, isNeedRefreshToken, upDataToken } = response.data
	if (isNeedRefreshToken) {
		setToken(upDataToken)
	}
	const successCode = '200'
	if (successCode.includes(code)) {
		return response.data
	} else {
		// 统一错误处理
	}
})

// isParams 对于get 与 其他的post 、put data与params在api统一data处理
// 拦截器里去重写
export function axiosReq({ url, data, method, baseURL, timeout, isParams, isUploadFile, isDownLoadFile }) {
	return http({
		url,
		method: method ?? 'GET',
		data: data ?? {},
		isParams: isParams ?? 'false',
		baseURL: baseURL ?? import.meta.env.VITE_APP_BASE_URL,
		timeout: timeout ?? 15000,
		isUploadFile: isUploadFile ?? false,
		isDownLoadFile: isDownLoadFile ?? false
	})
}
export default axiosReq
