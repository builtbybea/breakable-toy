<template>
  <div>
    <Button 
      :disabled="isDisabled"
      text="Previous"
      align="left" 
      :icon="iconLeft"
      @click="prevPage"
    />
    <Button
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
    };
  },

  //Function to count the amount of questions in JSON and equal this to the number of pages
  computed: {
    pageCount() {
      const pageNum = this.$route.params.id;
      return pageNum;
    },
    isDisabled(){
      const pageNum = this.$route.params.id;
      if (JSON.parse(pageNum) === 1) {
        return true;
      }
      return false;
    },
  },

  //Functions for navigating between page questions
  methods: {
    nextPage() {
      const routeId = this.$route.params.id++;
      return this.$router.push({ params: routeId  });    
    },
    prevPage() {
      const routeId = this.$route.params.id--;
      return this.$router.push({ params: routeId  }); 
    },
  },
  
};
</script>

