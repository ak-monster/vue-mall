import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/h8',
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })

  // 2.2 响应拦截
  //2.2.1 只接受data值，其余值不要（具体哪些值看官网的响应结构表）
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送网络请求
  return instance(config)
}


