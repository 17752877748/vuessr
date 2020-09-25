import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../view/home/index.vue'),
      },
      {
        path: '/case',
        name: 'case',
        component: () => import('../view/case/index.vue'),
      },
      {
        path: '/news/:tab',
        name: 'news',
        component: () => import('../view/news/index.vue'),
        props: true,
      },
      {
        path: '/details/:id',
        name: 'details',
        component: () => import('../view/details/index.vue'),
        props: true,
      },
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: () => import('../view/aboutUs/index.vue'),
      },
      {
        path: '/contactWe',
        name: 'contactWe',
        component: () => import('../view/contactWe/index.vue'),
      },
      {
        path: '/product',
        name: 'product',
        component: () => import('../view/product/index.vue'),
      },
      {
        path: '/transit',
        name: 'transit',
        component: () => import('../view/transit/index.vue'),
      },
      {
        path: '*',
        redirect: '/'
      },
    ],
    scrollBehavior(to, from, savedPosition) {
      // return 期望滚动到哪个的位置
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })

}
