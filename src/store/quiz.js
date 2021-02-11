import { questions } from '@/questions.json';

// import Vue from 'vue';
//values from quiz.vue will be calculated here(quiz.js)
function state() {
  return {
  //store value for each question
    // userAnswers: {
    // },
    userAnswers : {
      '1': 'action',
      '2': 'onigiri',
      '3': 'something-obsecure',
      '4': 'take-the-notebook',
      '5': '50',
      '6': 5,
      '7': 'empathetic',
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

    const getSelectedQuestionChoice = (questionIndex, questionId) => {
      const questionChoices = questions[questionIndex].choices;
      return questionChoices.find(choice => choice.value ===  state.userAnswers[questionId]);
    };
    
    const questionTwoSelectedChoice = getSelectedQuestionChoice(1, '2');
    totalScore[questionTwoSelectedChoice.character] += questionTwoSelectedChoice.score;


    const questionThreeSelectedChoice = getSelectedQuestionChoice(2, '3');
    totalScore[questionThreeSelectedChoice.character] += questionThreeSelectedChoice.score;


    const questionFiveChoices = questions[4].choices;
    const questionFiveValue =  parseInt(state.userAnswers['5'], 10);

    const questionFiveSelectedChoice = questionFiveChoices.find(choice => {
      if(questionFiveValue >= choice.min && questionFiveValue <= choice.max) return true;
      return false;
    });
    totalScore[questionFiveSelectedChoice.character] += questionFiveSelectedChoice.score;

    const questionSixSelectedChoice = getSelectedQuestionChoice(5, '6');
    totalScore[questionSixSelectedChoice.character] += questionSixSelectedChoice.score;

    const questionSevenSelectedChoice = getSelectedQuestionChoice(6, '7');
    totalScore[questionSevenSelectedChoice.character] += questionSevenSelectedChoice.score;
  
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
