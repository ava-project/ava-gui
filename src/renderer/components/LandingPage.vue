<template>
  <div>
    <h1>Hello {{username}}</h1>
    <div>
      <p>First Name: {{firstName}}</p>
      <p>Last Name: {{lastName}}</p>
      <p>Email: {{email}}</p>
      </br>
      <p>Addresses to conect with the mobile application: <span v-for="address in addresses">{{address}}:8765</br></span></p>
    </div>
  </div>
</template>

<script>
  import os from 'os';

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
        addresses: [],
      };
    },

    mounted() {
      const interfaces = os.networkInterfaces();

      this.$http.get('http://localhost:8001/me').then((res) => {
        if (res.status === 200) {
          this.username = res.body.username;
          this.email = res.body.email;
          this.firstName = res.body.first_name;
          this.lastName = res.body.last_name;
        }
      }).catch(() => {
      });

      Object.keys(interfaces).map((interfacesKey) => {
        interfaces[interfacesKey].forEach((inet) => {
          if (inet.family === 'IPv4' && !inet.internal) {
            this.addresses.push(inet.address);
          }
        });
        return true;
      });
    },
  };
</script>

<style>
.navbar {
  display: block !important;
}
</style>
