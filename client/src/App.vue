<template>
  <div>
    <message :status="messageData.status" :type="messageData.type" :message="messageData.message"></message>
    <global-header :user="currentUser"></global-header>
    <global-bread-crumb></global-bread-crumb>
    <router-view></router-view>
    <loading v-if="loadingTimes > 0"></loading>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, watch, reactive } from 'vue'
import { useStore } from 'vuex'
import GlobalHeader from '@views/layout/GlobalHeader.vue'
import GlobalBreadCrumb from '@views/layout/GlobalBreadCrumb.vue'
import Loading from '@components/Loading.vue'
import Message from '@components/message/Message.vue'
import { GlobalDataProps } from './store/types' // TODO 使用 alias 会造成自动提醒失败，期待 vue-cli4 改进

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    GlobalBreadCrumb,
    Loading,
    Message
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const loadingTimes = computed(() => store.state.common.loadingTimes)
    const message = computed(() => store.state.common.message)
    const currentUser = computed(() => store.state.user.userInfo) // example: computed & vuex 写法实例
    const messageData = reactive({
      status: false,
      type: 'success',
      message: ''
    })

    onMounted(() => {
      store.dispatch('fetchUserInfoByName', { name: 'Li_lei' })
    })
    watch(() => message.value.status, () => {
      const { status, type, content } = message.value
      if (status && content) {
        messageData.status = true
        messageData.type = type
        messageData.message = content
      }
    })
    return {
      currentUser,
      loadingTimes,
      messageData
    }
  }
})
</script>

<style lang="stylus">
#app {
  position relative
}
</style>
