<template>
  <div class="header">
    <span style="float: left">顶部导航栏</span>
    <span style="float: right">你好，{{ userName }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
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
