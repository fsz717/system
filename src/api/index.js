import axios from 'axios'
import { Message } from 'element-ui'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d49a0fefcea253a31ab9701/fsz/';
    console.log(axios.defaults.baseURL)
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
}

//创建axios实例
const service=axios.create({
    baseURL:axios.defaults.baseURL,// api的base_url
    timeout:5000,//请求超时
    withCredentials: true,
})
const formEncode = (params) => {
    let url = ''
    for (let i in params) {
        url += encodeURIComponent(i) + '=' + encodeURIComponent(params[i]) + '&'
    }
    return url.slice(0, -1)
}
//request 拦截器
service.interceptors.request.use(config=>{
    return config
},error=>{
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
    response => {
        console.log(response)
        return response
    },
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
        //  const res = response.data;
        //     if (res.code !== 20000) {
        //       Message({
        //         message: res.message,
        //         type: 'error',
        //         duration: 5 * 1000
        //       });
        //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
        //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //           confirmButtonText: '重新登录',
        //           cancelButtonText: '取消',
        //           type: 'warning'
        //         }).then(() => {
        //           store.dispatch('FedLogOut').then(() => {
        //             location.reload();// 为了重新实例化vue-router对象 避免bug
        //           });
        //         })
        //       }
        //       return Promise.reject('error');
        //     } else {
        //       return response.data;
        //     }
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    })

export default {
    get: (url)=>{
        return service({
            url,
            method: 'get',
        })
    },
    post: (url,data)=>{
        return service({
            url,
            method: 'post',
            data,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
        })
    },
    postForm (url, data) {
        console.log(formEncode(data))
        return service({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: formEncode(data)
        })
    }
}
