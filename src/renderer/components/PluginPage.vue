<template>
  <div>
    <p>List of Installed Plugin</p>
    <div>
      <ul>
        <li class="pluginList" v-for="plugin in installedPlugin">
          <h2>{{ plugin.name }}</h2>
          <h3>{{ plugin.version }}</h3>
          <p>{{ plugin.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'plugin-page',

    data() {
      return {
        installedPlugin: {},
      };
    },

    mounted() {
      this.$http.get('http://localhost:8001/plugins').then((res) => {
        this.installedPlugin = res.body.data;
      }, () => {
      });
    },
  };
</script>

<style>
.pluginList {
  padding: 1em;
  margin-bottom: .125em;
  display: block;
  list-style: none;
  background-color: #ccc;
}
</style>
