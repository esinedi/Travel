<template>
  <div>
    <div class="banner" @click="handleShowGallary">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-info">
        <div class="banner-tittle">
          {{ sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe618;</span>
          {{ gallaryImgs.length }}
        </div>
      </div>
    </div>
    <CommonGallary
      :imgsList="gallaryImgs"
      v-show="showGallary"
      @close="hideGallary"
    ></CommonGallary>
  </div>
</template>

<script>
import CommonGallary from '@/components/gallary/Gallary.vue'

export default {
  name: 'DetailBanner',
  props: {
    sightName: {
      type: String,
      default: ''
    },
    bannerImg: {
      type: String,
      default: ''
    },
    gallaryImgs: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
        'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleShowGallary () {
      this.showGallary = true
    },
    hideGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  height: 0;
  padding-bottom: 55%;
  overflow: hidden;
  .banner-img {
    width: 100%
  }
  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: .6rem;
    color: #fff;
    background-image: radial-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    .banner-tittle{
      flex: 1;
      font-size: .32rem;
      padding: 0 .2rem;
    }
    .banner-number {
      height: .32rem;;
      line-height: .32rem;
      margin-top: .14rem;
      padding: 0 .4rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, .8);
      font-size: .24rem;
    }
    .banner-icon {
      font-size: .24rem
    }
  }
}
</style>
