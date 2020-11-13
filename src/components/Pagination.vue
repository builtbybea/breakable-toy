<template>
  <div>
    <Button 
      :disabled="currentPage === 0" 
      text="Previous" 
      align="left" 
      :icon="iconLeft"
      @click="prevPage"
    />
    <Button
      :disabled="currentPage === pageCount" 
      text="Next" 
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

  data () {
    return {
      questions,
      iconRight: ArrowRight,
      iconLeft: ArrowLeft,
      currentPage: 0,
    };
  },

  //Function to count the amount of questions in JSON and equal this to the number of pages
  computed: {
    pageCount() {
      const pageNum = this.$route.params.id;
      return pageNum;
    },
  },

  //Functions for navigating between page questions
  methods: {
    nextPage() {
      const routeId = this.currentPage++;
      return this.$router.push({ path: `/quiz/${routeId}` });    
    },
    prevPage() {
      if(this.questions.length > 0);
      return this.currentPage--;
    },
  },
  
};
</script>

