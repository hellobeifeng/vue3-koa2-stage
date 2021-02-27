<template>
  <el-alert
    class="aa"
    v-if="status"
    title="系统异常"
    :type="type"
    :description="message"
    show-icon
    @close="hide">
  </el-alert>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export type MessageType = 'success' | 'info' | 'warning' | 'error'
export default defineComponent({
  props: {
    status: Boolean,
    message: String,
    type: {
      type: String as PropType<MessageType>,
      default: 'success'
    }
  },
  emits: ['close-message'],
  setup (props, context) {
    const hide = () => {
      context.emit('close-message', true)
    }
    return {
      hide
    }
  }
})

</script>

<style lang="stylus">
.aa {
  position: fixed;
  z-index: 1000;
  width: 300px;
  right: 7px;
  top: 80px;
}
</style>
