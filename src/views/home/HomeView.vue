<template>
  <div class="home">
    <HomeHeaders></HomeHeaders>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <!-- <router-link to="/list">列表页</router-link> -->
  </div>
</template>

<script>

import HomeHeaders from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'

export default {
  name: 'HomeView',
  components: {
    HomeHeaders,
    HomeSwiper,
    HomeIcons
  }
  // data () {
  //   return {
  //     city: '',
  //     swiperList: []
  //   }
  // },
  // methods: {
  //   getHomeInfo () {
  //     axios.get('/api/index.json?city=' + this.city)
  //       .then(this.getHomeInfoSucc)
  //   }
  // },
  // getHomeInfoSucc (res) {
  //   res = res.data
  //   if (res.ret && res.data) {
  //     const data = res.data
  //     this.swiperList = data.swiperList
  //     // this.iconList = data.iconList
  //     // this.recommendList = data.recommendList
  //     // this.weekendList = data.weekendList
  //   }
  // }
}
</script>
