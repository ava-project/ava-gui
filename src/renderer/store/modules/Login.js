const state = {
  main: 0,
};

const mutations = {
  login(user) {
    return this.$http.post('http://localhost:8001/login', user, { emulateJSON: true }).then((res) => {
      if (res.status === 200) {
        this.$router.push('/');
      }
    }).catch((err) => {
      /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
      this.response = err;
      if (err.status === 400) {
        this.errorCred = true;
      }
      console.log(err);
    });
  },
};

const actions = {
  login({ commit }) {
    commit('LOGIN');
  },
};

export default {
  state,
  mutations,
  actions,
};
