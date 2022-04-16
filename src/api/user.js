import http from '@/utils/http'

export function loginReq({ userName, passWord }) {
	return http({
		url: '',
		data: { userName, passWord },
		method: 'POST'
	})
}
