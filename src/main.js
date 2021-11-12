import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import money from 'v-money'
import VuePhoneNumberInput from 'vue-phone-number-input'
import VueMaterial from 'vue-material'
import VueSplide from '@splidejs/vue-splide'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

// Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.component('vue-phone-number-input', VuePhoneNumberInput)
Vue.use(money)
Vue.use(VueCarousel)
Vue.use(VueSplide)
Vue.use(VueMaterial)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Vue.use(CarouselCard)
// Vue.use(CarouselCardItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
