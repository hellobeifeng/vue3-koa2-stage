import { asyncAndCommit } from '../index'
const user = {
  state: {
    userInfo: {
      name: '--',
      age: '--'
    }
  },
  mutations: {
    fetchUserInfoByName (state, rowData) {
      const data = rowData.data || {}
      state.userInfo = data
    }
  },
  getters: {
    getUserInfo: (state) => {
      return state.userInfo
    }
  },
  actions: {
    fetchUserInfoByName ({ commit }, { name }) {
      return asyncAndCommit(`/stage/api/users/${name}`, 'fetchUserInfoByName', commit)
    }
  }
}

export default user
