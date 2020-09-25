import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导入api
import { getHomeInfo } from '../api/home'

import {
    getArticleList,
    getArticleHotList,
    getArticleDetails,
    getNewsColumn
} from "../api/news";

export function createStore() {
    return new Vuex.Store({
        state: {
            // 所有栏目
            homeData: [],
            // 新闻栏目
            column: [],
            // 新闻列表
            newsList: [],
            // 热门新闻
            hotNewsList: [],
            // 最新新闻
            nearNewsList: [],
            // 新闻详情
            articleDetails: {},
            // 新闻分页总数
            total: 10
        },
        actions: {
            // 所有栏目列表
            async homeInfo({ commit }) {
                let { data } = await getHomeInfo({ cid: 59 });
                // console.log('-------------------data---------------------');
                // console.log(data);
                commit('setHomeInfo', data)
            },
            // 新闻栏
            async NewsColumn({ commit }) {
                // console.log('获取新闻栏目');
                let { data } = await getNewsColumn({ isPage: 0 });
                // console.log('获取完毕');
                commit('setColumn', data.list);
            },
            // 新闻列表
            async getNewsList({ commit }, { tabActive, pageNum }) {
                console.log(tabActive);
                let { data } = await getArticleList({
                    status: 0,
                    type: tabActive,
                    pageNum: pageNum,
                })
                // console.log('====news===');
                // console.log(data);
                commit('setNewsList', data.list);
                commit('setTotal', data.total);
            },
            // 热门/最新新闻
            async getHotNewsList({ commit }, { tabActive, isorder }) {
                let { data } = await getArticleHotList({
                    type: tabActive,
                    isorder,
                })
                let articleList = data.list.filter((item, i) => {
                    return i <= 5;
                });
                if (isorder == 1) {
                    return commit('setHotNewsList', { articleList, listName: 'hotNewsList' });
                } else {
                    return commit('setHotNewsList', { articleList, listName: 'nearNewsList' });
                }
            },
            // 新闻详情
            async getDetailsNews({ commit, dispatch }, id) {
                console.log("id==" + id);
                let { data } = await getArticleDetails({
                    id,
                    status: 0
                });
                console.log('详情------------------------------------------');
                const tabActive = data.article.type;
                commit('setArticleDetails', data);
                dispatch('getHotNewsList', { tabActive, isorder: 1 });
                dispatch('getHotNewsList', { tabActive, isorder: 2 });
            }
        },
        mutations: {
            setHomeInfo(state, data) {
                Vue.set(state, 'homeData', data);
            },
            setColumn(state, dataList) {
                Vue.set(state, 'column', dataList);
                // console.log('column===');
                // console.log(state.column);
            },
            setNewsList(state, dataList) {
                Vue.set(state, 'newsList', dataList);
                // console.log('newsList===');
                // console.log(state.newsList);
            },
            setTotal(state, total) {
                Vue.set(state, 'total', total);
            },
            setHotNewsList(state, { articleList, listName }) {
                Vue.set(state, listName, articleList);
                // console.log('listName===');
                // console.log(state.hotNewsList);
                // console.log(state.nearNewsList);
            },
            setArticleDetails(state, data) {
                console.log('articleDetails===');
                Vue.set(state, 'articleDetails', data);
                console.log(state.articleDetails.article.name);
            }
        }
    })
}