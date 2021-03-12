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
import { useStore } from 'vuex'
import { useRoute, RouteRecordRaw } from 'vue-router'
import MenuBarItem from './MenuBarItem.vue'

export default defineComponent({
  name: 'MenuBarIndex',
  props: {
    routes: {
      type: Array as PropType<RouteRecordRaw[]>,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const route = useRoute()

    // const userInfo = computed(() => store.getters.getUserInfo) // example: getters 写法
    const username = computed(() => store.state.user.userInfo.name) // example: module/state 写法
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
