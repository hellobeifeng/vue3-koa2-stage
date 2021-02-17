import { createRouter, createWebHashHistory } from 'vue-router'
// 启用路由懒加载，将目标组件单独构建，命中路由时再下载单独文件
const Dir1View = () => import(/* webpackChunkName: "example-dir1" */ '@views/dir1/Index.vue')
const Dir2View = () => import(/* webpackChunkName: "example-dir2" */ '@views/dir2/Index.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/dir1',
      name: 'dir1View',
      component: Dir1View
    },
    {
      path: '/dir2',
      name: 'dir2View',
      component: Dir2View
    }
  ]
})

export default router
