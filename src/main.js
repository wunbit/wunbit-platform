import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

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

const database = firebase.database

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    store.dispatch('fetchUser', { id: store.state.authId })
  }
}).$mount('#app')
