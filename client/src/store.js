import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const types = {
  SET_IS_AUTNENTIATED: "SET_IS_AUTNENTIATED",
  SET_USER: "SET_USER"
};

const state = {
  isAutnenticated: false,
  user: {}
};

const getters = {
  isAutnenticated: state => state.isAutnenticated,
  user: state => state.user
};

const mutations = {
  [types.SET_IS_AUTNENTIATED](state, isAutnenticated) {
    if (isAutnenticated) {
      state.isAutnenticated = isAutnenticated;
    } else {
      state.isAutnenticated = false;
    }
  },

  [types.SET_USER](state, user) {
    if (user) {
      state.user = user;
    } else {
      state.user = {};
    }
  }
};

const actions = {
  setAuthenticated: ({ commit }, isAutnenticated) => {
    commit(types.SET_IS_AUTNENTIATED, isAutnenticated);
  },

  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user);
  }
};

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {}
  state,
  getters,
  mutations,
  actions
});
