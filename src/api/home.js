import axios from '../utils/request';

// 首页相关接口

// 获取首页各模块信息
export function getHomeInfo(data) {
    return axios.get('columnItem/listByCId', data);
}

// 留言接口(在线申请)
export function toMessage(data) {
    return axios.post('/message/add', data);
}