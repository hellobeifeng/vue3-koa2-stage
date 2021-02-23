import { createRouter, createWebHistory } from 'vue-router'
// 启用路由懒加载，将目标组件单独构建，命中路由时再下载单独文件
const HomeView = () => import(/* webpackChunkName: "example-home" */ '@views/layout/Home.vue')
const Dir1View = () => import(/* webpackChunkName: "example-dir1" */ '@views/dir1/Index.vue')
const Dir2View = () => import(/* webpackChunkName: "example-dir2" */ '@views/dir2/Index.vue')
const Dir2Sub1View = () => import(/* webpackChunkName: "example-dir2-sub1" */ '@views/dir2/Dir2Sub1.vue')
const Dir2Sub2View = () => import(/* webpackChunkName: "example-dir2-sub2" */ '@views/dir2/Dir2Sub2.vue')
const base = process.env.NODE_ENV === 'production' ? '/stage/' : '/'

const router = createRouter({
  history: createWebHistory(base),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        desc: '首页'
      }
    },
    {
      path: '/dir1',
      name: 'dir1View',
      component: Dir1View,
      meta: {
        desc: '目录1'
      }
    },
    {
      path: '/dir2',
      name: 'dir2View',
      component: Dir2View,
      meta: {
        desc: '目录2'
      },
      children: [
        {
          path: 'sub1',
          component: Dir2Sub1View,
          meta: {
            desc: '子目录1'
          }
        },
        {
          path: 'sub2',
          component: Dir2Sub2View,
          meta: {
            desc: '子目录2'
          }
        }
      ]
    }
  ]
})

export default router
