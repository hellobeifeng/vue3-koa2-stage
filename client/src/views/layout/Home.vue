<template>
  <div class="HomeViewContainer">
    <span>Home page</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dir1Page',
  setup () {
    console.log('home steup')
  }
})
</script>
<style lang="stylus" scoped>
  .HomeViewContainer {
    margin-top: 10px;
    text-align: center
  }
</style>
