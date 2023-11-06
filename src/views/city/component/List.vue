<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">
          当前城市
        </div>
      </div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{ city }}</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
      </div>
      <div class="button-list">
        <div class="button-wrapper"
          v-for="item in hotCities"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          <div class="button">{{ item.name }}</div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">
          {{ key }}
        </div>
        <div class="item-list">
          <div class="item border-topbottom" v-for="city in item" :key="city.id" @click="handleCityClick(city.name)">
            {{ city.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  props: {
    cities: {
      type: Object,
      default: () => {}
    },
    hotCities: {
      type: Array,
      default: () => []
    },
    letter: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getScrollStatus () {
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollY: true,
        click: true
      })
    },
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
    // 或者
    // ...mapMutations({
    //   changeCity: changeCity
    // })
  },
  watch: {
    cities (n, o) {
      if (Object.keys(n).length !== 0) {
        this.$nextTick(() => this.scroll.refresh())
      }
    },
    letter (n, o) {
      if (n) {
        // better-scroll 自动定位滚动方法
        // 获取 dom 元素
        const element = this.$refs[n][0]
        this.scroll.scrollToElement(element, 100)
      }
    }
  },
  mounted () {
    this.getScrollStatus()
  }
}
</script>

<style lang="less" scoped>
.list {
  position: absolute;
  top: 1.78rem;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .area {
   .title {
    line-height: .4rem;
    background: #eee;
    padding-left: .2rem;
   }
  }
  .button-list {
    padding: .1rem .6rem .1rem .1rem;
    overflow: hidden;
    .button-wrapper {
      float: left;
      width: 33.3%;
      .button {
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: .76rem;
      color: #666;
      padding-left: .2rem;
    }
  }
}
</style>
