<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav">
          <li><router-link to='landing-page'>Home</router-link></li>
          <li><router-link to='plugin'>Plugin</router-link></li>
          <li><a v-on:click="logout()" href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ava-gui',

    methods: {
      logout() {
        this.$http.get('http://localhost:8001/logout').then((res) => {
          if (res.status === 200) {
            this.$router.push('/login');
          }
        }).catch((err) => {
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },
    },
  };
</script>

<style>
  /* CSS */
</style>
