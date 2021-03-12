const HomeView = () => import(/* webpackChunkName: "example-home" */ '@views/layout/Home.vue')
const LayOutView = () => import(/* webpackChunkName: "layout" */ '@views/layout/Home.vue')
const Dir1View = () => import(/* webpackChunkName: "example-dir1" */ '@views/dir1/Index.vue')
const Dir2View = () => import(/* webpackChunkName: "example-dir2" */ '@views/dir2/Index.vue')
const Dir3View = () => import(/* webpackChunkName: "example-dir3" */ '@views/dir3/Index.vue')
const Dir4View = () => import(/* webpackChunkName: "example-dir4" */ '@views/dir4/Index.vue')
const Dir1Sub1View = () => import(/* webpackChunkName: "example-dir1-sub1" */ '@views/dir1/Dir1Sub1.vue')
const Dir2Sub1View = () => import(/* webpackChunkName: "example-dir2-sub1" */ '@views/dir2/Dir2Sub1.vue')
const Dir2Sub2View = () => import(/* webpackChunkName: "example-dir2-sub2" */ '@views/dir2/Dir2Sub2.vue')
const Dir3Sub1View = () => import(/* webpackChunkName: "example-dir3-sub1" */ '@views/dir3/Dir3Sub1.vue')
const Dir3Sub2View = () => import(/* webpackChunkName: "example-dir3-sub2" */ '@views/dir3/Dir3Sub2.vue')
const Dir3Sub3View = () => import(/* webpackChunkName: "example-dir3-sub3" */ '@views/dir3/Dir3Sub3.vue')
const Dir3Sub4View = () => import(/* webpackChunkName: "example-dir3-sub4" */ '@views/dir3/Dir3Sub4.vue')
const Dir4Sub1View = () => import(/* webpackChunkName: "example-dir4-sub1" */ '@views/dir4/Dir4Sub1.vue')
const Dir4Sub2View = () => import(/* webpackChunkName: "example-dir4-sub2" */ '@views/dir4/Dir4Sub2.vue')
const Dir4Sub3View = () => import(/* webpackChunkName: "example-dir4-sub3" */ '@views/dir4/Dir4Sub3.vue')
const Dir4Sub4View = () => import(/* webpackChunkName: "example-dir4-sub4" */ '@views/dir4/Dir4Sub4.vue')

export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: LayOutView,
    redirect: '/home',
    meta: {
      hidden: true,
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/dir1',
    name: 'dir1View',
    component: Dir1View,
    meta: {
      title: '目录1'
    },
    children: [
      {
        path: 'sub1',
        component: Dir1Sub1View,
        meta: {
          title: '子目录1'
        }
      }
    ]
  }
]

export const asyncRouterMap = [
  {
    path: '/dir2',
    name: 'dir2View',
    component: Dir2View,
    meta: {
      title: '目录2'
    },
    children: [
      {
        path: 'sub1',
        component: Dir2Sub1View,
        meta: {
          title: '子目录1'
        }
      },
      {
        path: 'sub2',
        component: Dir2Sub2View,
        meta: {
          title: '子目录2'
        }
      }
    ]
  },
  {
    path: '/dir3',
    name: 'dir3View',
    component: Dir3View,
    meta: {
      title: '目录3'
    },
    children: [
      {
        path: 'sub1',
        component: Dir3Sub1View,
        meta: {
          title: '子目录1'
        }
      },
      {
        path: 'sub2',
        component: Dir3Sub2View,
        meta: {
          title: '子目录2'
        }
      },
      {
        path: 'sub3',
        component: Dir3Sub3View,
        meta: {
          title: '子目录3'
        }
      },
      {
        path: 'sub4',
        component: Dir3Sub4View,
        meta: {
          title: '子目录4'
        }
      }
    ]
  },
  {
    path: '/dir4',
    name: 'dir4View',
    component: Dir4View,
    meta: {
      title: '目录4'
    },
    children: [
      {
        path: 'sub1',
        component: Dir4Sub1View,
        meta: {
          title: '子目录1'
        }
      },
      {
        path: 'sub2',
        component: Dir4Sub2View,
        meta: {
          title: '子目录2'
        }
      },
      {
        path: 'sub3',
        component: Dir4Sub3View,
        meta: {
          title: '子目录3'
        }
      },
      {
        path: 'sub4',
        component: Dir4Sub4View,
        meta: {
          title: '子目录4'
        }
      }
    ]
  }
]
