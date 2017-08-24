<template>
  <div>
    <p>List of Installed Plugin</p>
    <div>
      <plugin-list
        v-for="(plugin, index) in plugins"
        v-bind:plugin="plugin"
        v-bind:key="index">
      </plugin-list>
    </div>
  </div>
</template>

<script>
  import PluginList from './PluginPage/PluginList';

  export default {

    name: 'plugin-page',

    components: {
      PluginList,
    },

    data() {
      return {
        plugins: {},
      };
    },

    mounted() {
      this.$http.get('http://localhost:8001/plugins').then((res) => {
        this.plugins = res.body.data;
      }).catch((err) => {
        /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
        console.log(err);
      });
    },
  };
</script>

<style>
</style>
