import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Diplomas from '../views/Diplomas.vue'
import ProfessionalExperience from '../views/ProfessionalExperience.vue'
import Certifications from '../views/Certifications.vue'
import SideActivities from '../views/SideActivities.vue'
import Skills from '../views/Skills.vue'
import Expertises from '../views/Expertises.vue'
import Tools from '../views/Tools.vue'
import Languages from '../views/Languages.vue'

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
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/expertises',
    name: 'Expertises',
    component: Expertises
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/languages',
    name: 'Languages',
    component: Languages
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
