<template>
  <div class="Dir1ViewContainer">
    <span>Dir1 page</span>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dir1Page',
  setup () {
    console.log('dir1 steup')
  }
})
</script>

<style lang="stylus" scoped>
  .Dir1ViewContainer {
    margin-top: 10px;
    text-align: center
  }
</style>
