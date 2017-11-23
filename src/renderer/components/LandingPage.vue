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

    props: ['isLoggedIn'],

    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.$http.get('http://localhost:8001/me').then((res) => {
          if (res.status === 200) {
            next();
          }
        }).catch(() => {
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

    mounted() {
      this.$http.get('http://localhost:8001/me').then((res) => {
        if (res.status === 200) {
          this.username = res.body.username;
          this.email = res.body.email;
          this.firstName = res.body.first_name;
          this.lastName = res.body.last_name;
        }
      }).catch(() => {
      });
    },
  };
</script>

<style>
.navbar {
  display: block !important;
}
</style>
