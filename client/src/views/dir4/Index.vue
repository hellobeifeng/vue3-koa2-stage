<template>
  <div class="Dir4ViewContainer">
    <span>Dir4 page</span>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dir4Page',
  setup () {
    console.log('dir4 steup')
  }
})
</script>

<style lang="stylus" scoped>
  .Dir4ViewContainer {
    margin-top: 10px;
    text-align: center
  }
</style>
