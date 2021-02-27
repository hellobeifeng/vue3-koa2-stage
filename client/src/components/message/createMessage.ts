/**
 * todo element-plus 的 el-alert 不支持这种调用方式，期待后续
 */
import { createApp } from 'vue'
import Message from './Message.vue'
export type MessageType = 'success' | 'info' | 'warning' | 'error'

const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageInstance = createApp(Message, {
    message,
    type
  })
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)
  messageInstance.mount(mountNode)
  setTimeout(() => {
    messageInstance.unmount(mountNode)
    document.body.removeChild(mountNode)
  }, timeout)
}

export default createMessage
