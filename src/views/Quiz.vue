<template>
  <div class="quiz">
    <Title :msg="currentQuestion.question" :subtitle="currentQuestion.subtitle" />
    <div v-if="currentQuestionType === 'image-selection'" class="quiz__image-input">
      <ImageInput 
        v-for="(option, key) in currentQuestion.choices"
        :key="key"
        :text="option.text"
        :value="option.value"
        :type="inputType"
        :image="option.image"
        name="image"
        @get-selected="selectedAnswer"
      />
    </div>
    <div v-else-if="currentQuestionType === 'slider-scale'" class="quiz__range-input">
      <RangeInput 
        id="slider-scale"
        name="range"
        @get-range="selectedRange"
      />
    </div>
    <div v-else-if="currentQuestionType === 'star-rating'" class="quiz__star-input">
      <StarInput 
        v-for="(option, index) in currentQuestion.choices"
        :key="index" 
        :text="index"
        :type="inputType"
        name="star"
        :active="rating >= index"
        :highlighted="highlightedRating >= index"
        @rated="setRating($event, index)" 
        @highlighted="setHighlighted($event, index)"
        @unhighlighted="unsetHighlighted($event, index)"
      />
    </div>
    <div v-else class="quiz__custom-input">
      <CustomInput
        v-for="(option, key) in currentQuestion.choices"
        :key="key"
        :text="option.text"
        :value="option.value"
        :type="inputType"
        :image="option.image"
        name="option"
        @get-selected="selectedAnswer"
      />
    </div>
    
    <Pagination :value="value" @change-page="handleSaveAnswer" />
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
import { INPUT_TYPES_MAP } from '@/mapInputs.js';
import { mapActions } from 'vuex';

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
      rating: -1,
      highlightedRating: -1,
      value: null,
    };
  },

  computed: {
    currentQuestionId() {
      return this.$route.params.id;
    },
    currentQuestion() {
      // Routes each Question to a new page and add question id to each of url
      // the routeId is 1
      // our array starts at 0
      return questions[this.currentQuestionId - 1];
    },
    currentQuestionType() {
      // const routeId = this.$route.params.id;
      // return questions[routeId - 1].type;
      return this.currentQuestion.type;
    },
    inputType() {
      return INPUT_TYPES_MAP[this.currentQuestionType];
    },
  },
  watch: {
    //can use the below if above methods do not exist
    // '$route.params.id'(){
    //   console.log('route changed');
    //   this.value = null;
    // },
    currentQuestionId(newRouteId){
      this.value = null;
      this.saveAnswer({
        key: newRouteId,
        value: null,
      });
    },
  },
  methods: {
    ...mapActions('quiz', [
      'saveAnswer',
    ]),
    selectedAnswer(event) {
      this.value = event.target.value;
    },
    selectedRange(event) {
      this.value = event.target.value;
    },
    setRating(event, index) {
      this.rating = index;
      this.value = index + 1;
    },
    setHighlighted(event, index){
      this.highlightedRating = index;
    },
    unsetHighlighted() {
      this.highlightedRating = -1;
    },
    handleSaveAnswer(newRoute) {
      if(this.value === null) {
        return;
      }
      const userAnswerObject = {
        key: this.currentQuestionId,
        value: this.value,
      };
      this.saveAnswer(userAnswerObject);
      this.$router.push(newRoute);
    },
  },
};
</script>
