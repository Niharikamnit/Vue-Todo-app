import Vue from 'vue'
import App from './App.vue'

// import all js and css files Headers(for styling etc)
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// or can write 
// new Vue({
//   el:'#app',
//   //cannot use 'this' in arrow functions
//   render: h=> h(App)
// })
//but .$mount() will avoid having errors
// while tagging #app from dom, as it will only make a 
//virtual dom and make it reactive once the dom has sucessfully mounted without 
//any errors or timeouts
