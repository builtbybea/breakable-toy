<template>
  <div>
    <Button 
      :disabled="isFirstQuestion"
      text="Previous"
      align="left" 
      :icon="iconLeft"
      @click="prevPage"
    />
    <Button
      :disabled="isNextButtonDisabled"
      :text="updateText"
      align="right" 
      :icon="iconRight"
      @click="nextPage"
    />
  </div>
</template>

<script>
import Button from '@/components/Button';
import ArrowRight from '@/assets/images/arrow-right.svg';
import ArrowLeft from '@/assets/images/arrow-left.svg';
import { questions } from '@/questions.json';

export default {
  name: 'pagination-component',
  components: {
    Button,
  },
  props: {
    value: {
      type: String,
    },
  },

  data () {
    return {
      questions,
      iconRight: ArrowRight,
      iconLeft: ArrowLeft,
      nextText: 'Next',
    };
  },

  //Function to count the amount of questions in JSON and equal this to the number of pages
  computed: {
    pageCount() {
      const pageNum = this.$route.params.id;
      return pageNum;
    },
    //Function to return true or false if first question
    isFirstQuestion(){
      const objectID = this.$route.params.id;
      const pageNum = JSON.parse(objectID);
      if (pageNum === 1) {
        return true;
      }
      return false;
    },
    isNextButtonDisabled(){
      console.log('isNextButtonDisabled', this.value);
      return this.value === null;
    },
    updateText(){
      const objectID = this.$route.params.id;
      const pageNum = JSON.parse(objectID);
      const lastQuestionText = this.nextText;
      return lastQuestionText && pageNum  === this.questions.length ? 'Finish' : 'Next';
    },
  },

  //Functions for navigating between page questions
  methods: {
    nextPage() {  
      const routeId = this.$route.params.id;
      const nextRouteId = +routeId + 1;

      let newRoute = { 
        params: {
          id: nextRouteId, 
        },
      };

      if(+routeId === this.questions.length) {
        newRoute = '/results';
      }

      this.$emit('change-page', newRoute);
    },
    prevPage() {
      const routeId = this.$route.params.id--;
      const objectId = this.$route.params.id;
      const pageNum = JSON.parse(objectId);
      if (pageNum === 0) {
        return this.$router.push('/');
      }
      return this.$router.push({ params: routeId  }); 
    },
  },
};
</script>
