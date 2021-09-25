<template>
  <div v-show="loaded">
    <Wave css-class="top" />
    <div class="container main">
      <Navbar />
      <nuxt />
      <Footer />
      <Bottom />
    </div>
    <Wave />
  </div>
</template>
<script>
import Vue from 'vue'
import Wave from '~/components/Wave.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import Bottom from '~/components/Bottom.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCopyright,
  faPhone,
  faFax,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCopyright, faPhone, faFax, faLinkedin, faLinkedinIn, faEnvelope)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
export default {
  name: 'Default',
  components: { Wave, Navbar, Footer, Bottom },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    const local = this
    window.onload = () => {
      local.loaded = true
    }
  }
}
</script>
