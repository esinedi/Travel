<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul class="ul-main">
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <!-- <button class="item-button">查看详情</button> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="less" scoped>
.weekend-title {
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}
.ul-main {
  .item {
    border-bottom: 1px solid #eee;
    .item-img-wrapper{
      overflow: hidden;
      height: 0;
      padding-bottom: 33.9%;
      .item-img {
        width: 100%;
      }
    }
    .item-info {
      padding: .1rem;
      .item-title {
        line-height: .54rem;
        font-size: .32rem;
        .ellipsis();
      }
      .item-desc {
        line-height: .4rem;
        color: #ccc;
        .ellipsis();
      }
    }
  }
}
</style>
