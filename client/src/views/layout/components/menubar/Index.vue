<template>
  <div>
    <el-menu
      class="el-menu"
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
    >
      <menu-bar-item v-for="route in visibleRoutes" :key="route.path" :item="route" :base-path="route.path" />
      <el-menu-item style="float: right">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { useRoute, RouteRecordRaw } from 'vue-router'
import MenuBarItem from './MenuBarItem.vue'
import { SSOInfoProps } from '../../../../store/types'

export default defineComponent({
  name: 'MenuBarIndex',
  props: {
    routes: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true
    },
    user: {
      type: Object as PropType<SSOInfoProps>,
      required: true
    }
  },
  setup (props) {
    // const store = useStore()
    // const ssoInfo = computed(() => store.getters.getSSOInfo) // example: getters 写法
    // const username = computed(() => store.state.user.ssoInfo.username) // example: module/state 写法
    const route = useRoute()
    const username = computed(() => props.user.username)
    const activeIndex = route.path
    const visibleRoutes = computed(() => {
      return props.routes.filter(route => !route.meta.hidden)
    })
    return {
      username,
      activeIndex,
      visibleRoutes
    }
  },
  components: {
    MenuBarItem
  }
})
</script>

<style lang="stylus" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: rgb(255, 255, 255);
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
