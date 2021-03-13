import { asyncAndCommit } from '../index'
const user = {
  state: {
    ssoInfo: {
      username: '你的名字',
      role: [],
      permission: {
        api: [],
        view: []
      }
    }
  },
  mutations: {
    fetchUserInfoByName (state, rowData) {
      const data = rowData.data || {}
      state.ssoInfo = data
    }
  },
  getters: {
    getSSOInfo: (state) => {
      return state.ssoInfo
    }
  },
  actions: {
    fetchUserInfoByName ({ commit }, { name }) {
      return asyncAndCommit(`/stage/api/users/${name}`, 'fetchUserInfoByName', commit)
    }
  }
}

export default user
