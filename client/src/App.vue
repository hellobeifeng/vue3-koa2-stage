<template>
<div>
  <global-header></global-header>
  <global-bread-crumb></global-bread-crumb>
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import GlobalHeader from '@views/layout/GlobalHeader.vue'
import GlobalBreadCrumb from '@views/layout/GlobalBreadCrumb.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalBreadCrumb
  },
  mounted () {
    const name: string | number = 'string'
    console.log('name', name)
  }
})
</script>

<style lang="stylus">
#app {
  position relative
}
</style>
