// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'


/* swiper */
import 'swiper/dist/css/swiper.min.css';


/* jquery */
// import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* 重置样式 */
import './assets/css/reset.min.css'


/* element-ui */
import {
  Message
} from 'element-ui'
Vue.prototype.$message = Message;  // message用use注册会自动触发一次
import registerCompoents from './utils/element-ui.config'
Vue.use(registerCompoents);

/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name, Header)
 

/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)


/* aos */
import AOS from 'aos'
import 'aos/dist/aos.css'
Vue.prototype.$AOS = AOS;

Vue.prototype.$BASE_OBJ = window.myGlod ? window.myGlod : process.env;


Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next();
});


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
