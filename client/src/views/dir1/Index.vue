<template>
  <div>
    <span>Dir1 page</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dir1Page',
  setup () {
    console.log('dir1/Index.vue setup')
  }
})
</script>
