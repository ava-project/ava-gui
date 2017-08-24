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
    <div v-if="errorCred" class="error-msg">
      <i class="fa fa-times-circle"></i>
      Wrong credentials.
    </div>

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
        errorCred: false,
      };
    },

    methods: {
      login() {
        const body = { email: this.email, password: this.password };
        const option = { emulateJSON: true };

        this.errorCred = false;
        this.$http.post('http://localhost:8001/login', body, option).then((res) => {
          if (res.status === 200) {
            this.$router.push('/');
          }
        }).catch((err) => {
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          this.response = err;
          if (err.status === 400) {
            this.errorCred = true;
          }
          console.log(err);
        });
      },
    },

  };
</script>

<style>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css');
.navbar {
  display: none;
}

.error-msg {
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px 3px 3px 3px;
  color: #D8000C;
  background-color: #FFBABA;
}
</style>
