<template>
  <div>
    <p>Welcome</p>
    <div>
      <p>Username: {{username}}</p>
      <p>Email: {{email}}</p>
      <p>First Name: {{firstName}}</p>
      <p>Last Name: {{lastName}}</p>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'landing-page',

    beforeRouteEnter(to, from, next) {
      next((vm) => {
        /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
        console.warn('toto');
        vm.$http.get('http://localhost:8001/me').then(() => {
          next();
        }, () => {
          next('/login');
        });
      });
    },

    data() {
      return {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
      };
    },

    methods: {
      fetchUserInfo: () => {

      },
    },

    mounted() {
      this.$http.get('http://localhost:8001/me').then((res) => {
        this.username = res.body.username;
        this.email = res.body.email;
        this.firstName = res.body.first_name;
        this.lastName = res.body.last_name;
      }, () => {
      });
    },
  };
</script>

<style>
</style>
