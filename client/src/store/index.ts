import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import {
  GlobalDataProps
} from './types'
import userModule from './modules/user'
import commonModule from './modules/common'

export const asyncAndCommit = async (url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
  const { data } = await axios(url, config)
  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, data)
  }
  return data
}

// vuex4 目前没办法很好的支持 modules 后的自动类型推断，期待后续改善
// state直接放置在 store 跟级别是可以支持的
const store = createStore<GlobalDataProps>({
  modules: {
    user: userModule,
    common: commonModule
  }
})

export default store
