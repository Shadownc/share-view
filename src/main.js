// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import { config } from 'assets/js';

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  const vm = new Vue();
  if (to.name == 'Login') {
    return next()
  }
  if (to.matched.some(record => record.meta.isPublish)) {
    if (to.matched.some(record => record.meta.requireAuth)) {
      vm.$getUserInfo().then(res => {
        if (res) {
          vm.$getUserData();
          next();
        } else {
          let url = window.location.protocol + "//" + window.location.host;
          let fullPath = to.fullPath
          location.href = "/login?returnUrl=" + encodeURIComponent(url + fullPath);
        }
      })
    } else {
      next();
    }
  } else {
    // 开发环境用next，线上用跳转404
    location.href = "/404.html";
    //next();
  }
});

Vue.use(config);
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
