<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
// export default {

// }
export default {
  name: 'CityHeader'
}
</script>

<style lang="less" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: @header-height;
  line-height: @header-height;
  font-size: .32rem;
  color: #fff;
  background: @over-bg-color;
  .header-back{
    position: absolute;
    top: 0;
    left: 0;
    width: .64rem;
    text-align: center;
    font-size: .4rem;
    color: #fff;
  }
}
</style>
