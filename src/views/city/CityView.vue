<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList
      :city="city"
      :cities="cities"
      :hotCities="hotCities"
      :letter="letter"
      ref="cityList"
    ></CityList>
    <CityAlphabet
      :alphabetList="alphabetList"
      @change="henleLetterChange"
    ></CityAlphabet>
  </div>
</template>

<script>
import CityHeader from './component/Header.vue'
import CitySearch from './component/Search.vue'
import CityList from './component/List.vue'
import CityAlphabet from './component/Alphabet.vue'
import axios from 'axios'
export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      city: '',
      cities: {},
      alphabetList: [],
      hotCities: [],
      letter: ''
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.city = res.data.city
        this.hotCities = res.data.hotCities
        this.cities = res.data.cities
        this.alphabetList = Object.keys(res.data.cities)
      }
    },
    henleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style>

</style>
