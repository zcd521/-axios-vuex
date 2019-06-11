import axios from 'axios'
import { Message } from 'element-ui'

//创建axios实例
var service = axios.create({
    baseURL:process.env.API_ROOT, //api的 API_BOOT
    timeout:8000 // 请求超时时间
}) 
console.log(process.env)

//拦截器
service.interceptors.response.use(response =>{
        const res = response.data
        console.log(res+"...................................")
        if(res.code !=200){
            console.log(res)
            Message({
                message:res.msg,
                type:'error',
                duration:5*1000
            })
            return Promise.reject('error')
        } else{
            return response.data
        }
    },
    error => {
       
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error) 
    }
)
export default service

