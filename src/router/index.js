import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('components/Home')), 'Home');
const Login = r => require.ensure([], () => r(require('components/Login')), 'Login');
import { userCenter } from './userCenter'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { isPublish: true, requireAuth: false }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { isPublish: true, requireAuth: false }
    },
    userCenter
  ]
})
