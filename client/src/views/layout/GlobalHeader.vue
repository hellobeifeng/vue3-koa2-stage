<template>
  <div class="headerContainer">
    <el-menu
      class="el-menu"
      mode="horizontal"
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="activeIndex"
    >
      <el-menu-item index="/">Vue3 Stage</el-menu-item>
      <el-menu-item index="/dir1">dir1</el-menu-item>
      <el-menu-item index="/dir2/sub1">sub1</el-menu-item>
      <el-menu-item index="/dir2/sub2">sub2</el-menu-item>
      <el-menu-item style="float: right">退出登陆</el-menu-item>
      <el-menu-item style="float: right">{{ user.name }} {{ user.age }}</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { useStore } from 'vuex'
import { UserInfoProps } from '../../store/types'

export default defineComponent({
  name: 'GlobalHeader',
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  props: {
    user: {
      type: Object as PropType<UserInfoProps>,
      required: true
    }
  },
  setup () {
    const store = useStore()
    const userInfo = computed(() => store.getters.getUserName) // example: getters 写法
    return {
      userInfo
    }
  }
})
</script>

<style lang="stylus" scoped>
.header {
  height: 50px;
  line-height: 50px;
  text-align: center
}
</style>
