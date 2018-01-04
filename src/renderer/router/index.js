import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage'),
      props: true,
    },
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/Login'),
      props: true,
    },
    {
      path: '/plugin',
      name: 'plugin-page',
      component: require('@/components/PluginPage'),
    },
    {
      path: '/setting',
      name: 'setting',
      component: require('@/components/Setting'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
