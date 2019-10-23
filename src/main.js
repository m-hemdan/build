import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './plugins/vuetify'
import router from './router'
import {store} from './stores/store'
import * as VueGoogleMaps from "vue2-google-maps"
import * as firebase from 'firebase'
import Vuelidate from 'vuelidate'
import contactUs from './components/contact/contac.vue'
import 'vuetify-media-player/src/style.styl'
import { picker} from 'emoji-mart-vue'
Vue.component("contactUS",contactUs)

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueGoogleMaps,{
  load:
  {
    key:"AIzaSyB9mDqFwOSG4xaekHzAm_2dnYBhAq1RZCM",
    libraries:"places"
  }
})
new Vue({
  store,
  router,
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAP5YssQXMuS0lX-ndzzgt4SRc893WS5vg",
      authDomain: "next-3c61a.firebaseapp.com",
      databaseURL: "https://next-3c61a.firebaseio.com",
      projectId: "next-3c61a",
      storageBucket: "next-3c61a.appspot.com",
      messagingSenderId: "619495517448",
      appId: "1:619495517448:web:5174774b5942897d0410bd"
    })
   
  },
  render: h => h(App),
}).$mount('#app')
