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

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
