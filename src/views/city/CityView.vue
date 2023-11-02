<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch></CitySearch>
  </div>
</template>

<script>
import CityHeader from './component/Header.vue'
import CitySearch from './component/Search.vue'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>

<style>

</style>
