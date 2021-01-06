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
    <div v-else-if="getQuestionType === 'slider-scale'" class="quiz__range-input">
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
    <div v-else-if="getQuestionType === 'star-rating'" class="quiz__star-input">
      <pre>{{ rating }}</pre>
      <StarInput 
        v-for="(option, index) in getQuestions.choices"
        :key="index" 
        :text="index"
        :type="inputType[getQuestions.type]"
        name="star"
        :active="rating >= index"
        :hover="hoveredRating >= index"
        @rated="setRating($event, index)" 
        @focus="hoveredStar($event, index)"
        @mouseover="hoveredStar($event, index)"
        @blur="unhoveredStar($event)"
        @mouseleave="unhoveredStar($event)"
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
import StarInput from '@/components/StarInput';
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
    StarInput,
    Pagination,
  },

  data() {
    return {
      inputType,
      test: false,
      rating: -1,
      hoveredRating: -1,
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
    setRating(event, index) {
      console.log(event, index);
      this.rating = index;
    },
    hoveredStar(event, index){
      this.hoveredRating = index;
    },
    unhoveredStar(event) {
      this.hoveredRating = event;
    },
  },
};
</script>
