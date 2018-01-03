<template>
  <div>
    <h1>Plugins List</h1>
    <p>Here you can find all the plugins the community made.</p>
    <div class="list-of-plugins">
      <Card
        :bordered="false"
        class="installed-plugins"
      >
        <p slot="title">
          <Icon type="ios-filing"></Icon>
          Installed Plugins
        </p>
        <plugin-list
          v-for="(plugin, index) in plugins"
          v-if="plugin.installed === 'true'"
          v-bind:plugin="plugin"
          v-bind:key="index"
          update="update">
        </plugin-list>
      </Card>
      <Card
        :bordered="false"
        class="install-plugins"
      >
        <p slot="title">
          <Icon type="plus-circled"></Icon>
          Install Plugins
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
  .list-of-plugins{
    padding-top: 20px;
  }

  .installed-plugins, .install-plugins {
    background-color: #424242;
    margin-bottom: 20px;
  }

  .installed-plugins > .ivu-card-head, .install-plugins > .ivu-card-head {
    border-bottom: 1px solid #EE578A;
  }

  .installed-plugins > .ivu-card-head > p, .install-plugins > .ivu-card-head > p {
    color: #FFF !important;
  }
</style>
