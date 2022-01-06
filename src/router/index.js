import Vue from 'vue'
import VueRouter from 'vue-router'
import Movies from '../views/Movies.vue'
import Tvs from '../views/Tvs.vue'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/Tvs',
    name: 'Tvs',
    component: Tvs
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'Landingpage',
    component: LandingPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
