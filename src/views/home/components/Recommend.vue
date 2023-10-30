<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul class="ul-main">
      <li class="item" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '1',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战，浪漫的海洋主题乐园'
        },
        {
          id: '2',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战，浪漫的海洋主题乐园'
        },
        {
          id: '3',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战，浪漫的海洋主题乐园'
        },
        {
          id: '4',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战，浪漫的海洋主题乐园'
        },
        {
          id: '5',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          title: '大连圣亚海洋世界',
          desc: '浪漫大连首战，浪漫的海洋主题乐园'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.recommend-title {
  margin-top: .2rem;
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}
.ul-main {
  .item {
    display: flex;
    height: 1.9rem;
    overflow: hidden;
    border-bottom: 1px solid #eee;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0;
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
      .item-button {
        margin-top: .2rem;
        background: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
        line-height: .44rem;
      }
    }
  }
}
</style>
