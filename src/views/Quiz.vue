<template>
  <div class="quiz">
    <Title :msg="getQuestions.question" :subtitle="getQuestions.subtitle" />
    <CustomInput
      v-for="(option, key) in getQuestions.choices"
      :key="key"
      :text="option.text"
      :type="inputType[getQuestions.type]"
      name="option"
      @get-selected="selectedAnswer"
    />
    <Pagination />
  </div>
</template>

<script>
import Title from '@/components/Title';
import CustomInput from '@/components/CustomInput';
import Pagination from '@/components/Pagination';
import { questions } from '@/questions.json';
import { inputType } from '@/mapInputs.js';

export default {
  name: 'quiz-page',
  components: {
    Title,
    CustomInput,
    Pagination,
  },

  data() {
    return {
      inputType,
    };
  },

  computed: {
    getQuestions() {
      const routeId = this.$route.params.id;
      // Routes each Question to a new page and add question id to each of url
      // the routeId is 1
      // our array starts at 0
      return questions[routeId - 1];
    },
  },
  methods: {
    selectedAnswer(value) {
      console.log(value);
    },
  },
};
</script>
