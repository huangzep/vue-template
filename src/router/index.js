import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './map/' // 路由映射


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
  }
})

export default router
