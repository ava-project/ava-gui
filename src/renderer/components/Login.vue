<template>
  <div class="container container-table">
    <p>Login Page</p>
      <div class="container">
        <form class="ui form loginForm"  @submit.prevent="login">
          <input class="form-control" name="email" placeholder="Email" type="text" v-model="email">
          <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
          <button type="submit">Submit</button>
        </form>
      </div>

    <!-- errors -->
    <div v-if="response"><p>{{response}}</p></div>

  </div>
</template>

<script>
  export default {

    name: 'login-page',

    data() {
      return {
        email: '',
        password: '',
        response: '',
      };
    },

    methods: {
      login() {
        const body = { email: this.email, password: this.password };
        const option = { emulateJSON: true };
        this.$http.post('http://localhost:8001/login', body, option).then((res) => {
          if (res.status === 200) {
            this.$router.push('/');
          }
        });
      },
    },

  };
</script>

<style>
</style>
