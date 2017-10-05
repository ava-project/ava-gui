<template>
  <div id="app" style="background:#eee;">
    <Menu mode="horizontal" active-name="Home" class="menu-nav-bar">
      <MenuItem name="Home">
        <router-link to='landing-page'>Home</router-link>
      </MenuItem>
      <MenuItem name="Plugin">
        <router-link to='plugin'>Plugin</router-link>
      </MenuItem>
      <MenuItem name="Logout">
        <a v-on:click="logout()" href="#">Logout</a>
      </MenuItem>
    </Menu>
    <Card :bordered="false">
      <router-view></router-view>
    </Card>
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
  .menu-nav-bar {
    background-color: #ee6e73;
  }
</style>
