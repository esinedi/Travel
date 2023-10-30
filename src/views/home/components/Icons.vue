<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="icon" v-for="icon in item" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{ icon.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOptions: {
      },
      iconsList: [
        {
          id: 1,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 2,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 3,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 4,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 5,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 6,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 7,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 8,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        },
        {
          id: 9,
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_200x200_a3c26b4d.jpg',
          desc: '热门景点'
        }
      ]
    }
  },
  computed: {
    // 将 icon 数据进行页面分组
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="less" scoped>
.icons {
  width: 100%;
  height: 0;
  margin-top: .2rem;
  padding-bottom: 50%;
  /deep/ .swiper-container {
    height: 0;
    padding-bottom: 50%;
  }
  .icon {
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: .44rem;
      padding: .1rem;
      width: 100%;
      box-sizing: border-box;
      .icon-img-content {
          display: block;
          margin: 0 auto;
          height: 100%;
      }
    }
    .icon-desc{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: .44rem;
      line-height: .44rem;
      color: @over-text-color;
      text-align: center;
      .ellipsis()
    }
  }
}
</style>
