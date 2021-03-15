
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { RouteRecordRaw } from 'vue-router'

router.beforeEach(async (to, from, next) => {
  try {
    const hasRole: boolean = store.getters.getAsyncRoutes[0]
    if (hasRole) {
      next()
    } else {
      const { role = [] } = await store.dispatch('fetchUserInfoByName', { name: 'Li_leix' })
      const accessRoutes: Array<RouteRecordRaw> = await store.dispatch('generateRoutes', role)
      for (let i = 0; i < accessRoutes.length; i++) { // 惊 vue-route-next 当前版本竟然没有提供 addRoutes 方法，坑死我了
        await router.addRoute(accessRoutes[i])
      }
      if (store.getters.getAsyncRoutes[0]) {
        next({ ...to, replace: true })
      } else {
        await next()
      }
    }
  } catch (error) {
    next()
  }
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
