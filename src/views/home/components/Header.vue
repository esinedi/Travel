<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      内容
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <!-- 或者 {{ currentCity }} -->
        <!-- 计算属性 doubleCity -->
        <span class="iconfont">&#xe62d;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
// mapState 映射 api
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
    ...mapGetters(['doubleCity'])
    // 或者
    // ...mapState({
    //  currentCity: city
    // })
  }
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: @header-height;
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
    padding: 0 0.1rem;
    min-width: 1.04rem;
    float: right;
    text-align: center;
    color: #fff;
    .iconfont {
      margin-left: -.04rem;
      font-size: .24rem;
    }
  }
}
</style>
