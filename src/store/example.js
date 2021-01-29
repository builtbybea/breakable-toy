function state() {
  return {
    count: 1,
    title: 'Miss',
    firstName: 'Bea',
    lastName: 'Opara',
  };
}

const getters = {
  count(state) {
    return state.count;
  },
  fullName(state) {
    return `${state.title} ${state.firstName} ${state.lastName}`;
  },
};

const mutations = {
  INCREMENT_COUNT(state, number) {
    state.count += number;
  },
};

const actions = {
  incrementCount(context, number) {
    context.commit('INCREMENT_COUNT', number);
  },
};

//action - state - mutations

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

