import { createRouter, createWebHashHistory } from 'vue-router'
import Dir1View from '@views/dir1/Index.vue'
import Dir2View from '@views/dir2/Index.vue'

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
