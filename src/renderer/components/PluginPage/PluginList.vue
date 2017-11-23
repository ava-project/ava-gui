<template>
  <Card className="pluginList">
    <h2>{{ plugin.name }}</h2>
    <h3>{{ plugin.version }}</h3>
    <p>{{ plugin.description }}</p>
    <div>
      <Button
        v-if="plugin.installed === 'true'"
        v-on:click="removePlugin"
      >
        Uninstall
      </Button>
      <Button
        v-else
        v-on:click="installPlugin"
      >
        Install
      </Button>
    </div>
  </Card>
</template>

<script>
  export default {

    name: 'plugin-list',

    props: ['plugin', 'update'],

    data() {
      return {
      };
    },

    methods: {
      removePlugin() {
        const uri = `http://localhost:8001/plugins/${this.plugin.name}`;

        /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
        console.log('this ===>', this);

        this.$http.delete(uri).then(() => {
          this.update();
        }).catch((err) => {
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },

      installPlugin() {
        const uri = `http://localhost:8001/plugins/${this.plugin.author}/${this.plugin.name}/download`;

        this.$http.get(uri).then(() => {
          this.update();
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
