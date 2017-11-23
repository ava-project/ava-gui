<template>
  <div class="container container-table">
    <p>Login Page</p>
      <div class="container">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <FormItem prop="email">
              <Input type="text" v-model="formInline.email" placeholder="Email">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
                  <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="login()">Submit</Button>
          </FormItem>
        </Form>
      </div>
  </div>
</template>

<script>
  export default {

    name: 'login-page',

    props: ['setLog', 'isLoggedIn'],

    data() {
      return {
        formInline: {
          email: '',
          password: '',
        },
        ruleInline: {
          email: [
            { required: true, message: 'Email is required', trigger: 'blur' },
          ],
          password: [
            { required: true, message: 'Password is required', trigger: 'blur' },
            { type: 'string', min: 6, message: 'Password must be more then 6 character', trigger: 'blur' },
          ],
        },
      };
    },

    methods: {
      login() {
        const body = { email: this.formInline.email, password: this.formInline.password };
        const option = { emulateJSON: true };

        this.$http.post('http://localhost:8001/login', body, option).then((res) => {
          if (res.status === 200) {
            this.setLog(true);
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
