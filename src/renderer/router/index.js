import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage'),
    },
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/Login'),
    },
    {
      path: '/plugin',
      name: 'plugin-page',
      component: require('@/components/PluginPage'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});