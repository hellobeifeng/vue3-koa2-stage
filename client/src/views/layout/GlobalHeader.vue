<template>
  <div class="headerContainer">
    <menu-bar :routes="routes"></menu-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import MenuBar from '@views/layout/components/menubar/Index.vue'

export default defineComponent({
  name: 'GlobalHeader',
  setup () {
    const store = useStore()
    const routes = computed(() => store.state.common.routes)

    return {
      routes
    }
  },
  components: {
    MenuBar
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
