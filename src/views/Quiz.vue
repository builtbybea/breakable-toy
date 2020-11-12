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
    <Button text="Previous" align="left" :icon="iconLeft" />
    <Button text="Next" align="right" :icon="iconRight" />
  </div>
</template>

<script>
import Title from '@/components/Title';
import CustomInput from '@/components/CustomInput';
import Button from '@/components/Button';
import ArrowRight from '@/assets/images/arrow-right.svg';
import ArrowLeft from '@/assets/images/arrow-left.svg';
import { questions } from '@/questions.json';
import { inputType } from '@/mapInputs.js';

export default {
  name: 'quiz-page',
  components: {
    Title,
    CustomInput,
    Button,
  },

  data() {
    return {
      inputType,
      iconRight: ArrowRight,
      iconLeft: ArrowLeft,
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
