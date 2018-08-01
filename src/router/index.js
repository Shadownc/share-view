import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('components/Home')), 'Home');
import { userCenter } from './userCenter'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    userCenter
  ]
})
