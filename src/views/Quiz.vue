<template>
  <div class="quiz">
    <Title :msg="getQuestions.question" :subtitle="getQuestions.subtitle" />
    <div v-if="getQuestionType === 'image-selection'" class="quiz__image-input">
      <ImageInput 
        v-for="(option, key) in getQuestions.choices"
        :key="key"
        :text="option.text"
        :type="inputType[getQuestions.type]"
        :image="option.image"
        name="image"
        @get-selected="selectedAnswer"
      />
    </div>
    <div v-else-if="getQuestionType === 'slider-scale'">
      <RangeInput 
        v-for="(option, key) in getQuestions.choices"
        :key="key"
        :text="option.text"
        :type="inputType[getQuestions.type]"
        :image="option.image"
        name="image"
        @get-range="selectedRange"
      />
    </div>
    <div v-else>
      <CustomInput
        v-for="(option, key) in getQuestions.choices"
        :key="key"
        :text="option.text"
        :type="inputType[getQuestions.type]"
        :test="option.test"
        :image="option.image"
        name="option"
        @get-selected="selectedAnswer"
      />
    </div>
    
    <Pagination />
  </div>
</template>

<script>
import Title from '@/components/Title';
import CustomInput from '@/components/CustomInput';
import ImageInput from '@/components/ImageInput';
import RangeInput from '@/components/RangeInput';
import Pagination from '@/components/Pagination';
import { questions } from '@/questions.json';
import { inputType } from '@/mapInputs.js';

export default {
  name: 'quiz-page',
  components: {
    Title,
    CustomInput,
    ImageInput,
    RangeInput,
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
    getQuestionType() {
      const routeId = this.$route.params.id;
      return questions[routeId - 1].type;
    },
  },
  methods: {
    selectedAnswer(value) {
      console.log(value);
    },
  },
};
</script>
