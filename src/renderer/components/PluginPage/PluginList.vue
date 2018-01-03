<template>
  <Card
    :bordered="false"
    dis-hover
    class="plugin-list"
  >
    <h2>{{ plugin.name }}</h2>
    <h6>version: {{ plugin.version }}</h6>
    <p>{{ plugin.description }}</p>
    <div class="button-field">
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
  .plugin-list {
    background-color: #424242;
    border-bottom: 1px solid #EE578A;
    border-radius: initial;
    color: #FFF;
    display: block;
    list-style: none;
    margin-bottom: .125em;
    padding: 1em;
  }

  .plugin-list:hover {
    border-bottom: 1px solid #EE578A;
  }

  .button-field > button {
    color: #EE578A;
    background: transparent;
    border-color: #EE578A;
    border-radius: 4px;
    border-width: 1px !important;
    border-style: solid !important;
    box-shadow: none !important;
    font-size: 12px;
    font-weight: 400;
    height: 32px;
    line-height: 32px;
    padding: 0 10px;
    transition: all 400ms ease;
  }

  .button-field > button:hover {
    color: #EE578A;
    background-color: #626262;
    border-color: #EE578A;
  }
</style>
