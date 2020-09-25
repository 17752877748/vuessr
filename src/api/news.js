import axios from '../utils/request';

// 新闻相关接口

// 获取新闻列表
export function getArticleList(data) {
  return axios.get('/article/list', data);
}

// 获取热门/近期文章列表
export function getArticleHotList(data) {
  return axios.get('/article/orderbylist', data);
}

// 获取文章详情
export function getArticleDetails(data) {
  return axios.get('/article/one', data);
}

// 获取新闻栏目
export function getNewsColumn(data) {
  return axios.get('/aricleGroup/list', data)
}
