import { questions } from '@/questions.json';

// import Vue from 'vue';
//values from quiz.vue will be calculated here(quiz.js)
function state() {
  return {
  //store value for each question
    // userAnswers: {
    // },
    userAnswers : {
      '1': 'Action',
      '2': 'gyoza',
      '3': 'Something Obsecure',
      '4': 'Take The Notebook 📓',
      '5': '100',
      '6': 5,
      '7': 'Empathetic',
    },
  };
}

const getters = {
  totalScore(state) {
    const totalScore =  { 
      'sailor-moon': 0,
      'spike-spiegel': 0,
      'goku': 0,
      'michiko': 0,
      'monkey-d-luffy': 0,
    };

    totalScore.michiko = 10;
    
    const questionTwoChoices = questions[1].choices;
    const questionTwoSelectedChoice = questionTwoChoices.find(choice => {
      // console.log('test1', choice.character);
      console.log('state', state.userAnswers['2']);
      if(choice.value ===  state.userAnswers['2']) return true;
      return false;
    });
    console.log(
      'test2',
      questionTwoSelectedChoice.character,
      questionTwoSelectedChoice.score,
    );

    // totalScore['sailor-moon'] = 25;
    totalScore[questionTwoSelectedChoice.character] += questionTwoSelectedChoice.score;


    //const userScore = questionTwoSelectedChoice.score;

    return totalScore;
  },
};

const mutations = {
  SAVE_ANSWER(state, answerObject) {
    console.log('mutationsSaveAnswer', 'hungry', answerObject);
    state.userAnswers[answerObject.key] = answerObject.value;
  },
};

const actions = {
  saveAnswer(context, answerObject) {
    console.log('actionSaveAnswer', answerObject);
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
