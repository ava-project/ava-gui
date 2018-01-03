<template>
  <div id="app">
    <Menu  v-if="isLoggedIn" mode="horizontal" active-name="Home" class="menu-nav-bar">
      <MenuItem name="Home">
        <router-link to='landing-page'>Home</router-link>
      </MenuItem>
      <MenuItem name="Plugins">
        <router-link to='plugin'>Plugin</router-link>
      </MenuItem>
      <MenuItem name="Logout">
        <a v-on:click="logout()" href="#">Logout</a>
      </MenuItem>
    </Menu>
    <Card
      :bordered="false"
      dis-hover
      style="background: none;"
    >
      <router-view
        :setLog="setLog"
        :isLoggedIn="isLoggedIn"
      ></router-view>
    </Card>
  </div>
</template>

<script>
  export default {
    name: 'ava-gui',

    methods: {
      setLog(isLoggedIn) {
        this.isLoggedIn = isLoggedIn;
      },
      logout() {
        this.$http.get('http://localhost:8001/logout').then((res) => {
          if (res.status === 200) {
            this.isLoggedIn = false;
            this.$router.push('/login');
          }
        }).catch((err) => {
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },
    },

    data() {
      return {
        isLoggedIn: false,
      };
    },

    mounted() {
      this.$http.get('http://localhost:8001/me').then((res) => {
        if (res.status === 200) {
          this.isLoggedIn = true;
        }
      }).catch(() => {
      });
    },
  };
</script>

<style>
  body {
    background-color: #616161;
  }

  p, h1 {
    color: #FFF;
  }

  .menu-nav-bar {
    background-color: #424242;
  }

  .menu-nav-bar a {
    color: #FFF;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    background-color: #EE578A;
  }

  /*.menu-nav-bar > li, .ivu-menu-item:hover {
    color: #FFF;
    border-bottom: #FFF !important;
  }*/
</style>
