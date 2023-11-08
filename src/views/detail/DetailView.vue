<template>
  <div class="detail">
    <DetailBanner></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script>
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
      list: [
        {
          title: '成人票',
          children: [
            {
              title: '成人三馆联票'
            },
            {
              title: '成人五馆联票'
            }
          ]
        },
        {
          title: '学生票',
          children: [
            {
              title: '学生三馆联票'
            },
            {
              title: '学生五馆联票'
            }
          ]
        },
        {
          title: '儿童票',
          children: [
            {
              title: '儿童三馆联票'
            },
            {
              title: '儿童五馆联票'
            }
          ]
        },
        {
          title: '特惠票',
          children: [
            {
              title: '特惠三馆联票'
            },
            {
              title: '特惠五馆联票'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  height: 50rem;
}
</style>
