import Vue from 'vue'
import App from './App.vue'

/* bootstrap */
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
/* bootstrap */

/* vue-smoothscroll */
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
/* vue-smoothscroll */

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
