import Vue from 'vue';
import Vuex from 'vuex'
import storeConfig from './store'
import App from './components/App.vue';
// import VueModal from '../../vue-modal'

Vue.use( Vuex )
// Vue.use(VueModal)

const store = new Vuex.Store( storeConfig )

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  render: h => h(App)
});