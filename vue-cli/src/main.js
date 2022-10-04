import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 아래와 동일한 구문으로 이해할 것
// var App = {
//   template: '<div>app</div>'
// }
// new Vue({
//   el: '#app',
//   components: {
//     'app': App
//   }
// })
