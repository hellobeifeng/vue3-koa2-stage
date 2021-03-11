import { asyncRouterMap, constantRouterMap } from '../../router/routes'

function hasPermission (roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const common = {
  state: {
    routes: [],
    asyncAddRouters: [],
    loadingTimes: 0,
    message: {
      status: false,
      type: 'success',
      content: ''
    }
  },
  mutations: {
    setRouters (state, routes) {
      state.asyncAddRouters = routes
      state.routes = constantRouterMap.concat(routes)
    },
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
  getters: {
    getAsyncRoutes: (state) => {
      return state.asyncAddRouters
    }
  },
  actions: {
    generateRoutes ({ commit }, roles) {
      return new Promise(function (resolve) {
        const accessedRoutes = filterAsyncRoutes(asyncRouterMap, roles)
        commit('setRouters', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}

export default common
