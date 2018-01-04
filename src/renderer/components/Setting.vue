<template>
  <div>
    <h1>All Settings</h1>
    <p>What speech recognition engine would you like to use:
      </br>
      <i-switch
        :disabled="engineDisabled"
        @on-change="changeEngine"
        class="switch-engine"
        size="large"
        v-model="switchEngine"
      >
        <span slot="open">Sphinx</span>
        <span slot="close">Watson</span>
      </i-switch>
    </p>
    <p>Would you like to use mobile Jack entry:
      </br>
      <i-switch
        :disabled="entryDisabled"
        @on-change="changeEntry"
        class="switch-engine"
        size="large"
        v-model="switchEntry"
      >
        <span slot="open">Mobile</span>
        <span slot="close">Raw</span>
      </i-switch>
    </p>
  </div>
</template>

<script>
  export default {

    name: 'configuration-page',

    data() {
      return {
        switchEngine: false,
        switchEntry: false,
        engineDisabled: false,
        entryDisabled: false,
      };
    },
    methods: {
      changeEngine() {
        const body = {
          engine: this.switchEngine ? 'sphinx' : 'watson',
        };
        const option = { emulateJSON: true };

        this.engineDisabled = true;
        this.$http.post('http://localhost:8001/config', body, option).then(() => {
          this.engineDisabled = false;
        }).catch((err) => {
          this.engineDisabled = false;
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },
      changeEntry() {
        const body = {
          STT: this.switchEntry ? 'mobile' : 'raw',
        };
        const option = { emulateJSON: true };

        this.engineDisabled = true;
        this.$http.post('http://localhost:8001/config', body, option).then(() => {
          this.engineDisabled = false;
        }).catch((err) => {
          this.engineDisabled = false;
          /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
          console.log(err);
        });
      },
    },
  };
</script>

<style>
  .switch-engine {
    width: 78px;
  }

  .switch-engine.ivu-switch-checked::after {
    left: 54px;
  }

  .switch-engine.ivu-switch-checked {
    border-color: #EE578A;
    background-color: #EE578A;
  }
</style>
