import { createStore, Commit } from 'vuex'
import axios, { AxiosRequestConfig } from 'axios'
import {
  GlobalDataProps
} from './types'

const asyncAndCommit = async (url: string, mutationName: string, commit: Commit, config: AxiosRequestConfig = { method: 'get' }, extraData?: any) => {
  const { data } = await axios(url, config)
  if (extraData) {
    commit(mutationName, { data, extraData })
  } else {
    commit(mutationName, data)
  }
  return data
}

const store = createStore<GlobalDataProps>({
  state: {
    user: {
      userInfo: {
        name: '--'
      }
    }
  },
  mutations: {
    fetchUserInfo (state, rowData) {
      const data = rowData.data
      state.user.userInfo = data
    }
  },
  actions: {
    fetchUserInfo ({ commit }, { name }) {
      return asyncAndCommit(`/api/users/info?name=${name}`, 'fetchUserInfo', commit)
    }
  },
  getters: {
    getUserName: (state) => {
      return state.user.userInfo
    }
  }
})

export default store
