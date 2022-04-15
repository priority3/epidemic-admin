import axios from 'axios'
import {getToken,setToken} from "./auth.js"

const http = axios.create()

// 请求拦截
http.interceptors.request.use(request => {
  if(getToken()){
    request.headers['token'] = getToken()
  }
  if (request.isUploadFile) {
    request.headers['Content-Type'] = 'multipart/form-data'
  }
  return request
},(err) => Promise.reject(err))

// 响应拉杰
http.interceptors.response.use(response => {
  const {code,isNeedRefreshToken,upDataToken} = response.data
  if(isNeedRefreshToken){
    setToken(upDataToken)
  }
  const successCode = "200"
  if(successCode.includes(code)){
    return response.data
  }else{
    // 统一错误处理
  }
})


