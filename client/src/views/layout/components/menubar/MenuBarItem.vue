<template>
  <template v-if="!item.meta.hidden">
    <template v-if="!item.children || item.children.length === 0">
      <el-menu-item :index="basePath">
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="item.path" popper-append-to-body>
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <menu-bar-item
        v-for="child in item.children"
        :key="child.path"
        :base-path="resolvePath(child.path)"
        :item="child"
      />
    </el-submenu>
  </template>
</template>
<script lang="ts">
import path from 'path'
import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
  name: 'MenuBarItem',
  props: {
    item: Object as PropType<RouteRecordRaw>,
    basePath: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const isExternal = (path: string) => {
      return /^(https?:|mailto:|tel:)/.test(path)
    }
    const resolvePath = (routePath: string) => {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(props.basePath)) {
        return props.basePath
      }
      return path.resolve(props.basePath, routePath)
    }
    return {
      resolvePath
    }
  }
})
</script>
