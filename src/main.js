import Vue from 'vue'
import App from './App.vue'

import router from './router'
//全局注册nav
import Nav from './componens/Nav'



Vue.component(Nav.name,Nav)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
