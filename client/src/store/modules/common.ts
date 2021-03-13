import { asyncRouterMap, constantRouterMap } from '../../router/routes'
import { RouteRecordRaw } from 'vue-router'

/**
 * 如果当前路由节点的 meta.role 配置，存在于给定角色列表中，则返回 true
 * @param {Array<string>} roles - 角色列表
 * @param {Object} route        - 路由节点
 */
function hasPermission (roles: Array<string>, route: RouteRecordRaw) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}

/**
 * 根据用户角色列表，递归的过滤出异步路由中角色相关的路由
 * @param {Array} routes - 需要权限的异步路由集合
 * @param {Array} roles  - 角色列表
 */
export function filterAsyncRoutes (routes: Array<RouteRecordRaw>, roles: Array<string>) {
  const res: Array<RouteRecordRaw> = []
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
        let accessedRoutes = []
        if (roles.includes('admin_role')) {
          accessedRoutes = asyncRouterMap || []
        } else {
          accessedRoutes = filterAsyncRoutes(asyncRouterMap, roles)
        }
        console.log('accessedRoutes', accessedRoutes)
        commit('setRouters', accessedRoutes)
        resolve(accessedRoutes)
      })
    }
  }
}

export default common
