<template>
  <div class="home">
    <HomeHeaders></HomeHeaders>
    <!-- <router-link to="/list">列表页</router-link> -->
  </div>
</template>

<script>

import HomeHeaders from './components/Header.vue'
export default {
  name: 'HomeView',
  components: {
    HomeHeaders
  }
}
</script>
