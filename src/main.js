import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'
import vuelidate from 'vuelidate'

Vue.use(vuelidate)
Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAQoW1GwGXVWLMR3LohTnIJNcR1hDv5LT4',
  authDomain: 'wunbit-platform.firebaseapp.com',
  databaseURL: 'https://wunbit-platform.firebaseio.com',
  projectId: 'wunbit-platform',
  storageBucket: 'wunbit-platform.appspot.com',
  messagingSenderId: '1031425761253',
  appId: '1:1031425761253:web:ba294194a00bfa49'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

console.log(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
