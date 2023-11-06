<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市或拼音">
    </div>
    <div class="search-content"
     ref="search"
     v-show="keyword"
    >
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
          {{ item.name }}
        </li>
        <li class="search-item border-bottom" v-show="hasNoDate">
          未匹配到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import BScroll from '@better-scroll/core'
export default {
  name: 'CitySearch',
  props: {
    cities: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      scroll: null
    }
  },
  watch: {
    keyword (n, o) {
      this.setSearchList()
    }
  },
  computed: {
    hasNoDate () {
      return !this.list.length
    }
  },
  methods: {
    setSearchList () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        if (this.keyword === '') {
          this.list = []
        } else {
          this.list = result
        }
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }, 100)
    },
    getScrollStatus () {
      this.scroll = new BScroll(this.$refs.search, {
        scrollY: true,
        click: true
      })
    },
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
      // 传参
      // this.$router.push({name:'/', params: {id:1}})
      // this.$router.push({path:'/', query: {id:1}})
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.getScrollStatus()
  }
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
.search-content {
  position: absolute;
  top: 1.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #eee;
  overflow: hidden;
  z-index: 2;
  .search-item {
    line-height: .62rem;
    padding-left: .2rem;
    background: #fff;
    color: #666;
  }
}
</style>
