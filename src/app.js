import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router/index'
import { createStore } from './store/index';
import { sync } from 'vuex-router-sync';



/* swiper */
// import 'swiper/dist/css/swiper.min.css';
/* 重置样式 */
// import './assets/css/reset.min.css'
require('./assets/css/bootstrap.min.css');
require('swiper/dist/css/swiper.min.css');
require('./assets/css/reset.min.css');

/* aos */
// import AOS from 'aos'
// import 'aos/dist/aos.css'
require('aos/dist/aos.css')
// Vue.prototype.$AOS = AOS;
require('element-ui/lib/theme-chalk/index.css');

/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name, Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

// Vue.prototype.$BASE_OBJ = window.myGlod ? window.myGlod : process.env;
Vue.prototype.$BASE_OBJ = {
    WEB_URL: 'http://tms.szdexinchang.com:86/cms'
};

import { Message } from 'element-ui'
Vue.prototype.$message = Message; // message用use注册会自动触发一次
import registerCompoents from './utils/element-ui.config'
Vue.use(registerCompoents);


Vue.config.productionTip = false

export function createApp() {
    // 创建 router 和 store 实例
    const router = createRouter();
    const store = createStore();

    // 同步路由状态(route state) 到 store
    sync(store, router)

    const app = new Vue({
        router,
        store,
        // 根实例简单的渲染应用程序组件.
        render: h => h(App)
    })
    return { app, router, store }
}