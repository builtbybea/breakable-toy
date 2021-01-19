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
      :disabled="isLastQuestion"
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
    text: String,
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
      if (pageNum === 0) {
        return true;
      }
      return false;
    },
    //Function to return true or false if last question
    isLastQuestion(){
      const objectID = this.$route.params.id;
      const pageNum = JSON.parse(objectID);
      if(pageNum > this.questions.length) {
        return true;
      }
      return false;
    },
    //Function to return text as Finish if last question, else return text as Next
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
      const routeId = this.$route.params.id++;
      // Unary Operator By adding a + sign before a String, it will be converted into a number if it follows the right format.
      // https://stackabuse.com/javascript-convert-string-to-number/
      if (+this.$route.params.id > this.questions.length) {
        return this.$router.push('/results');
      }
      return this.$router.push({ params: routeId  });   
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
