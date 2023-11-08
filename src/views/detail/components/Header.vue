<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop ||
        document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 180
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    // 解绑全局事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less" scoped>
.header {
  .header-abs {
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: 100%;
    font-size: .4rem;
    color: #fff;
    text-align: center;
    line-height: .8rem;
    background: rgba(0, 0, 0, .8);
  }
  .header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: @header-height;
    line-height: @header-height;
    font-size: .32rem;
    color: #fff;
    background: @over-bg-color;
    z-index: 2;
    .header-fixed-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
}
</style>
