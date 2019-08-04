import Vue from 'vue'
import Router from 'vue-router'

import AboutMe from './views/AboutMe.vue'
import Experiences from './views/Experiences.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'about_me',
      component: AboutMe
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: Experiences
    }
  ]
})
