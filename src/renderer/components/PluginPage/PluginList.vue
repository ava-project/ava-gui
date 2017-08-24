<template>
  <div>
    <div class="pluginList">
      <h2>{{ plugin.name }}</h2>
      <h3>{{ plugin.version }}</h3>
      <p>{{ plugin.description }}</p>
      <button v-on:click="changeOpen">
        <i v-show="!isOpen">+</i>
        <i v-show="isOpen">-</i>
      </button>
      <div v-show="isOpen">
        <button v-on:click="removePlugin">
          Uninstall
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['plugin'],

    data() {
      return {
        isOpen: false,
      };
    },

    methods: {
      changeOpen() {
        this.isOpen = !this.isOpen;
      },

      removePlugin() {
        const uri = `http://localhost:8001/plugins/${this.plugin.name}`;
        // const uri = 'http://localhost:8001/toto';

        this.$http.delete(uri).then((res) => {
          this.plugins = res.body.data;
        }).catch((err) => {
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },

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
