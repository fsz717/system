import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import '@/assets/myCSS/common.scss'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icons'
// import '@/assets/iconfont/iconfont.css'
// import '@/assets/myCSS/element-variables.scss'
Vue.use(ElementUI);

import Api from './api/index.js';

Vue.prototype.$http=Api

Vue.config.productionTip = false;
// Vue.prototype.colorValue ='#C1172D'

router.beforeEach((to, from, next) => {
  if (to.name =='login') {
    next()
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


