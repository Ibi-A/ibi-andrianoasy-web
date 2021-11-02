import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Diplomas from '../views/Diplomas.vue'
import ProfessionalExperience from '../views/ProfessionalExperience.vue'
import Certifications from '../views/Certifications.vue'
import SideActivities from '../views/SideActivities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/diplomas',
    name: 'Diplomas',
    component: Diplomas
  },
  {
    path: '/experience',
    name: 'Experience',
    component: ProfessionalExperience
  },
  {
    path: '/certifications',
    name: 'Certifications',
    component: Certifications
  },
  {
    path: '/activities',
    name: 'Activities',
    component: SideActivities
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
