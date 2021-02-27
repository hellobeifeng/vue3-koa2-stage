const common = {
  state: {
    loadingTimes: 0,
    message: {
      status: false,
      type: 'success',
      content: ''
    }
  },
  mutations: {
    increaseLoading (state) {
      state.loadingTimes = state.loadingTimes + 1
    },
    reduceLoading (state) {
      state.loadingTimes = state.loadingTimes - 1
    },
    setMessage (state, config) {
      state.message.status = config.status || 'false'
      state.message.type = config.type || 'success'
      state.message.content = config.content || ''
    }
  },
  getters: {},
  actions: {}
}

export default common
