// import Vue from 'vue';
//values from quiz.vue will be calculated here(quiz.js)
function state() {
  return {
  //store value for each question
    userAnswers: {
    },
  };
}

const getters = {
  totalScore() {
    return {
      'Sailor Moon': 5,
      'Spike Spiegel': 0,
      'Goku': 10,
      'Michiko': 5,
      'Monkey D. Luffy': 20,
    };
  },
};

const mutations = {
  SAVE_ANSWER(state, answerObject) {
    console.log('mutationsSaveAnswer', 'hungry', answerObject);
    // Vue.set(state.userAnswers, 'two', 'gyoza');
    // state.userAnswers.two = 'gyoza';
    // const key = 'test';
    // state.userAnswers[key] = 'answer1';
    // state.userAnswers.key = 'answer2';
    // state.userAnswers['2'] = 'answer3';
    state.userAnswers[answerObject.key] = answerObject.value;
  },
};

const actions = {
  saveAnswer(context, answerObject) {
    console.log('actionSaveAnswer', answerObject);
    // const tempObject = {
    //   key: '2',
    //   value: 'gyoza',
    // };
    context.commit('SAVE_ANSWER', answerObject);
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
