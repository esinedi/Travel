<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="less" scoped>
.search {
  padding: .1rem;
  height: .72rem;
  background: @over-bg-color;
  .search-input {
    box-sizing: border-box;
    padding: 0 .1rem;
    width: 100%;
    height: .72rem;
    border-radius: .06rem;
    text-align: center;
    line-height: .72rem;
    color: #666;
  }
}
</style>
