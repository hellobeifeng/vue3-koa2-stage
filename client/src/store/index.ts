import { createStore } from 'vuex'

const store = createStore({
  state: {
    user: {
      userInfo: {
        name: 'Lilei'
      }
    }
  },
  getters: {
    getUserName: (state) => {
      return state.user.userInfo.name
    }
  }
})

export default store
