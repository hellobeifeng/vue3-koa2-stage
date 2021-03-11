
import { createApp } from 'vue'

import axios from 'axios'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router/index'
import store from './store/index'
axios.interceptors.request.use(config => {
  store.commit('increaseLoading')
  store.commit('setMessage', { status: false, message: '' })
  return config
})

axios.interceptors.response.use(response => {
  const { code = '', message = '' } = response.data
  store.commit('reduceLoading')
  if (code === 'A00500') {
    store.commit('setMessage', { status: true, type: 'error', content: message })
  }
  return response
}, e => {
  const { error } = e.response.data
  store.commit('setMessage', { status: true, content: error.message, type: 'error' })
  store.commit('reduceLoading')
  return Promise.reject(e.response.data)
})

router.beforeEach(async (to, from, next) => {
  try {
    const hasRole = store.getters.getAsyncRoutes[0]
    if (hasRole) {
      next()
    } else {
      const accessRoutes = await store.dispatch('generateRoutes', { roles: [] })
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
