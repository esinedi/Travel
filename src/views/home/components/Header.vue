<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      内容
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe62d;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: .86rem;
  color: #fff;
  background: @over-bg-color;
  .header-left {
    width: .64rem;
    float: left;
    font-size: .5rem;
    text-align: center;
  }
  .header-input {
    flex: 1;
    margin-left: .2rem;
    padding-left: .1rem;
    height: .64rem;
    color: #ccc;
    line-height: .64rem;
    background: #fff;
    border-radius: .1rem;
  }
  .header-right {
    width: 1.24rem;
    float: right;
    text-align: center;
    .iconfont {
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
