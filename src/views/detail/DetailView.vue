<template>
  <div class="detail">
    <DetailBanner
     :sightName="sightName"
     :bannerImg="bannerImg"
     :gallaryImgs="gallaryImgs"
    ></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="categoryList"></DetailList>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'

export default {
  name: 'DetailView',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', { params: { id: this.$route.params.id } })
        .then(this.handleGetDateSucc)
    },
    handleGetDateSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
