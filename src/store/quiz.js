import { questions } from '@/questions.json';

/*
  1. refactor state, create default state function (should be empty) and initalize state - done
  2. create resetAnswer action - done
  3. create resetAnswer mutation  - done
  4. create a mapAction in results page method, mapping resetAnswers from quiz store - check with a console.log
  5. create computed function that changes route back to start of quiz
  6. watch the current route to new route, results to start page
  7. add method which resetAnswer/resetQuizAnswers
  8. add method to event handler to Go Again button, expect on change clear items in store and take user back to start of quiz
*/
//values from quiz.vue will be calculated here(quiz.js)
function getDefaultState() {
  return {
  //store value for each question
    userAnswers : {
      // '1': 'action',
      // '2': 'onigiri',
      // '3': 'something-obsecure',
      // '4': 'toss-the-notebook-in-the-bin',
      // '5': '50',
      // '6': 5,
      // '7': 'empathetic',
    },
  };
}
//https://medium.com/@Taha_Shashtari/reset-vuex-module-state-like-a-pro-1acb7f8d9e21

//initalize state
const state = getDefaultState();

const getters = {
  totalScore(state) {
    const totalScore =  { 
      'sailor-moon': 0,
      'spike-spiegel': 0,
      'goku': 0,
      'michiko': 0,
      'monkey-d-luffy': 0,
      'light-yagami': 0,
    };

    const getSelectedQuestionChoice = (questionIndex, questionId) => {
      const questionChoices = questions[questionIndex].choices;
      return questionChoices.find(choice => choice.value ===  state.userAnswers[questionId]);
    };
    
    //Question 2
    const questionTwoSelectedChoice = getSelectedQuestionChoice(1, '2');
    totalScore[questionTwoSelectedChoice.character] += questionTwoSelectedChoice.score;

    //Question 3
    const questionThreeSelectedChoice = getSelectedQuestionChoice(2, '3');
    totalScore[questionThreeSelectedChoice.character] += questionThreeSelectedChoice.score;

    //Question 4
    const questionFourSelectedChoice = getSelectedQuestionChoice(3, '4');
    totalScore[questionFourSelectedChoice.character] += questionFourSelectedChoice.score;

    //Question 5
    const questionFiveChoices = questions[4].choices;
    const questionFiveValue =  parseInt(state.userAnswers['5'], 10);
    const questionFiveSelectedChoice = questionFiveChoices.find(choice => questionFiveValue >= choice.min && questionFiveValue <= choice.max);
    totalScore[questionFiveSelectedChoice.character] += questionFiveSelectedChoice.score;

    //Question 6
    const questionSixSelectedChoice = getSelectedQuestionChoice(5, '6');
    totalScore[questionSixSelectedChoice.character] += questionSixSelectedChoice.score;

    //Question 7
    const questionSevenSelectedChoice = getSelectedQuestionChoice(6, '7');
    totalScore[questionSevenSelectedChoice.character] += questionSevenSelectedChoice.score;
  
    return totalScore;
    
  },
};

const mutations = {
  SAVE_ANSWER(state, answerObject) {
    state.userAnswers[answerObject.key] = answerObject.value;
  },
  RESET_QUIZ_ANSWERS(state){
    Object.assign(state, getDefaultState());
  },
};

const actions = {
  saveAnswer(context, answerObject) {
    context.commit('SAVE_ANSWER', answerObject);
  },
  resetQuizAnswers(context) {
    context.commit('RESET_QUIZ_ANSWERS');
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
