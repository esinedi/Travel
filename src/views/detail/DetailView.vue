<template>
  <div class="detail">
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'

export default {
  name: 'DetailView',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
