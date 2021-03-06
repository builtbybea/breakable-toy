import { createStore } from 'vuex';
import quiz from '../store/quiz.js';
import example from './example.js';

const store = createStore({
  modules: {
    quiz,
    example,
  },
});

export default store;
