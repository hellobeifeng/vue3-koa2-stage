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
      <el-menu-item style="float: right">退出登陆</el-menu-item>
      <el-menu-item style="float: right">Li Lei</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  data () {
    return {
      activeIndex: this.$route.path
    }
  },
  name: 'GlobalHeader',
  setup () {
    const store = useStore()
    const userName = computed(() => store.getters.getUserName)
    return {
      userName
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
