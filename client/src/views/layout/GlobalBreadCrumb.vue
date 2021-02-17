<template>
  <div class="GlobalBreadCrumbContainer">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="item.path" v-for="item of breadcrumb" :key="item.path">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue'
import { useRoute } from 'vue-router'

interface BreadItem {
  path: string;
  name: string;
}

export default defineComponent({
  name: 'GlobalBreadCrumb',
  setup () {
    const breadcrumb = ref<Array<BreadItem>>([])
    const route = useRoute()
    watch(() => route.matched, (matched) => {
      breadcrumb.value = matched.map(item => {
        return {
          path: item.path,
          name: item.meta.desc
        }
      })
    }, { immediate: true })

    return {
      breadcrumb
    }
  }
})
</script>

<style lang="stylus" scoped>

.GlobalBreadCrumbContainer{
  margin-top: 1rem;
  margin-left: 20px;
}

</style>
