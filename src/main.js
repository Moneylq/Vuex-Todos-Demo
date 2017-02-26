import Vue from 'vue'
import store from './vuex/store.js'
import Todo from './components/Todo'
import VueResource from 'vue-resource'

Vue.use(VueResource)
 
new Vue({
  store, // inject store to all children
  el: '#app',
  render: h => h(Todo)
})
