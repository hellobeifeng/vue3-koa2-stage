<template>
  <div class="Dir3ViewContainer">
    <span>Dir3 page</span>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dir3Page',
  setup () {
    console.log('dir3 steup')
  }
})
</script>

<style lang="stylus" scoped>
  .Dir3ViewContainer {
    margin-top: 10px;
    text-align: center
  }
</style>
