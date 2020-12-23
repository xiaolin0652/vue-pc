import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

//基础的请求
const service = axios.create({
    baseURL:'http://39.99.186.36/api',
    timeout:20000
})

//请求拦截器
service.interceptors.request.use((config) => {
    NProgress.start()

    return config
})

//响应拦截器

service.interceptors.response.use(
    response => { 

        NProgress.done()
        return response.data
    },
    error => {
        NProgress.done()
        alert(error.message || '未知错误')
        throw error
     }
)

export default service