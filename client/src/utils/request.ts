import axios from 'axios'
import store from '../store/index'

const service = axios.create({
  timeout: 5000 // request timeout
})

service.interceptors.request.use(config => {
  store.commit('increaseLoading')
  store.commit('setMessage', { status: false, message: '' })
  return config
})

service.interceptors.response.use(response => {
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

export default service
