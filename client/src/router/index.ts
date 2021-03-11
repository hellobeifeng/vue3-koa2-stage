import { createRouter, createWebHistory } from 'vue-router'
import { constantRouterMap } from './routes'
// 启用路由懒加载，将目标组件单独构建，命中路由时再下载单独文件
const base = process.env.NODE_ENV === 'production' ? '/stage/' : '/'

const router = createRouter({
  history: createWebHistory(base),
  routes: constantRouterMap
})

export default router
