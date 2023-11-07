<template>
  <div class="container" @click="handleGarraryClick">
    <div class="wrapper" @click.stop>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in imgsList" :key="item">
          <img class="swiper-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgsList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        // 只要监听到父元素或者自己dom结构的变化，就自我刷新一次，解决了 swiper 宽度计算的问题
        observeParents: true,
        observer: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    handleGarraryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper /deep/ .swiper-container {
  overflow: inherit;
  .swiper-slide {
    height: 100%;
    overflow: hidden;
  }
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #000;
  z-index: 999;
  .wrapper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    .swiper-img {
      width: 100%;
    }
    .swiper-pagination {
      bottom: -1rem;
      color: #fff;
    }
  }
}
</style>
