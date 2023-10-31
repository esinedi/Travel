<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="less" scoped>
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.2%;
  background: #fff;
  .swiper-container{
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
  .swiper-img{
    width: 100%;
  }
}
</style>
