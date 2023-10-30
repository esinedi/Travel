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
  data () {
    return {
      weekendList: [
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
.weekend-title {
  margin-top: .2rem;
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
