/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
// import router from '../router';
import {
  Message
} from 'element-ui';


// const BASE_URL = window.myGlod ? window.myGlod : process.env;
// const ENV = {API_ROOT: 'http://192.168.1.201:8088/'};
const ENV = {API_ROOT: 'http://tms.szdexinchang.com:86/cms'};
const BASE_URL = ENV;

// 创建axios实例
const service = axios.create({
  baseURL: BASE_URL.API_ROOT,
  timeout: 10000,
});


// 请求拦截
service.interceptors.request.use(config => {
  let data = config.data ? config.data : config.params;
  data['devtype'] = 0;
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截
service.interceptors.response.use(response => {
  const res = response.data;
  if (res.code != 200) {
    // if ((res.code == 450 && res.msg == "请重新登录") || res.code == 3) {
    // Message.error('请重新登录');
    // localStoreHelper.clearLocalItem('token');
    // router.push({
    //   path: '/login',
    //   query: {}
    // })
    // } else {
    Message.error(res.msg || 'error');
    // }
  }
  return res;
}, error => {
  if (error.code == 'ECONNABORTED' && error.message.indexOf('timeout') != -1 && !error.config._retry) {
    Message.error('网络较差,刷新试试!');
  } else {
    Message.error("网络错误!");
    console.log(error);
  }
  return Promise.reject(error);
});

export default {
  post: function (url, data) {
    return service({
      method: 'post',
      url,
      data
    })
  },
  get: function (url, params) {
    return service({
      method: 'get',
      url,
      params
    })
  }
}
