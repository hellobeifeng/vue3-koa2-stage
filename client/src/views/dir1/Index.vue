<template>
  <div class="Dir1ViewContainer">
    <span>Dir1 page</span>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { createUniqueString } from '../../utils/index'

export default defineComponent({
  name: 'Dir1Page',
  setup () {
    console.log('dir1 steup', createUniqueString())
  }
})
</script>

<style lang="stylus" scoped>
  .Dir1ViewContainer {
    margin-top: 10px;
    text-align: center
  }
</style>
