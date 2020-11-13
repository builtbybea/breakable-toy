<template>
  <div>
    <Button 
      :disabled="routeId === 1" 
      text="Previous" 
      align="left" 
      :icon="iconLeft"
      @click="prevPage"
    />
    <Button
      :disabled="routeId === this.$route.params.id" 
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
      // currentPage: 1,
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
      const routeId = this.$route.params.id++;
      return this.$router.push({ params: routeId  });    
    },
    prevPage() {
      // if(this.questions.length > 0);
      // return this.currentPage--;
      const routeId = this.$route.params.id--;
      return this.$router.push({ params: routeId  }); 
    },
  },
  
};
</script>

