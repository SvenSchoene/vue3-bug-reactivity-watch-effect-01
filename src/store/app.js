const state = () => ({
  isWorking: false,
});

const getters = {};

const actions = {};

const mutations = {
  setIsWorking(state, v) {
    state.isWorking = v;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
