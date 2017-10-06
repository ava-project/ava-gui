<template>
  <div>
    <p>List of Plugin</p>
    <div>
      <Card>
        <p slot="title">
          <Icon type="ios-filing"></Icon>
          Installed
        </p>
        <plugin-list
          v-for="(plugin, index) in plugins"
          v-if="plugin.installed === 'true'"
          v-bind:plugin="plugin"
          v-bind:key="index"
          update="update">
        </plugin-list>
      </Card>
      <Card>
        <p slot="title">
          <Icon type="plus-circled"></Icon>
          Install Plugin
        </p>
        <plugin-list
          v-for="(plugin, index) in plugins"
          v-if="plugin.installed !== 'true'"
          v-bind:plugin="plugin"
          v-bind:key="index"
          v-bind:update="updatePluginList">
        </plugin-list>
      </Card>
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
        this.plugins = res.body;
      }).catch((err) => {
        /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
        console.log(err);
      });
    },

    methods: {
      updatePluginList() {
        this.$http.get('http://localhost:8001/plugins').then((res) => {
          this.plugins = res.body;
        }).catch((err) => {
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },
    },
  };
</script>

<style>
</style>
