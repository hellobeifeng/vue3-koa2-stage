<template>
<div>
  <global-header :user="currentUser"></global-header>
  <global-bread-crumb></global-bread-crumb>
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import GlobalHeader from '@views/layout/GlobalHeader.vue'
import GlobalBreadCrumb from '@views/layout/GlobalBreadCrumb.vue'
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store/types' // TODO 使用 alias 会造成自动提醒失败，期待 vue-cli4 改进

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalBreadCrumb
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const currentUser = computed(() => store.state.user.userInfo) // example: computed & vuex 写法实例
    onMounted(() => {
      store.dispatch('fetchUserInfoByName', { name: 'Li_lei' })
    })
    return {
      currentUser
    }
  }
})
</script>

<style lang="stylus">
#app {
  position relative
}
</style>
