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
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        {
          id: 1,
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/8f/bf3a40e4afcf29.jpg_r_640x214_90225212.jpg'
        },
        {
          id: 2,
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1711/15/1cdd5ee885686b.jpg_r_640x214_46768064.jpg'
        }
      ]
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
  padding-bottom: 37.08%;
  background: #fff;
  .swiper-container{
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
  .swiper-img{
    width: 100%;
  }
}
</style>
