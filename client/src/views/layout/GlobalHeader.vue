<template>
  <div class="headerContainer">
    <menu-bar :routes="routes" :user="ssoInfo"></menu-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue'
import { useStore } from 'vuex'
import MenuBar from '@views/layout/components/menubar/Index.vue'
import { SSOInfoProps } from '../../store/types'

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<SSOInfoProps>,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const routes = computed(() => store.state.common.routes)
    const ssoInfo = computed(() => props.user)
    return {
      routes,
      ssoInfo
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
