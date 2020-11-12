<template>
  <div>
    <Button 
      :click="prevPage"
      :disabled="currentPage === 0" 
      text="Previous" 
      align="left" 
      :icon="iconLeft"
    />
    <Button :click="nextPage" text="Next" align="right" :icon="iconRight" />
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

  data () {
    return {
      iconRight: ArrowRight,
      iconLeft: ArrowLeft,
      currentPage: 0,
    };
  },

  //Function to count the amount of questions in JSON and equal this to the number of pages
  computed: {
    pageCount() {
      const pageNum = this.questions.id.length;
      return questions[pageNum];
    },
  },

  //Functions for navigating between page questions
  methods: {
    nextPage() {
      if(this.currentPage < this.questions.id.length);
      return this.currentPage++;
          
    },
    prevPage() {
      if(this.questions.length > 0);
      return this.currentPage--;
    },
  },
  
};
</script>

