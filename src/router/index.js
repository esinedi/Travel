import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/ListView.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('../views/city/CityView.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/detail/DetailView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
