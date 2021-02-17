<template>
  <div class="Dir2ViewContainer">
    <span>Dir2 page</span>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dir2Page',
  setup () {
    console.log('dir2 steup')
  }
})
</script>

<style lang="stylus" scoped>
  .Dir2ViewContainer {
    margin-top: 10px;
    text-align: center
  }
</style>
