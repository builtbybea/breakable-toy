<template>
  <div class="quiz">
    <Title msg="What Are Your Favourite Genres To Watch?" />
    <CustomInput 
      v-for="question in questions" 
      :key="question" 
      text="Action" 
      type="checkbox" 
      @get-selected="selectedAnswer" 
    />
  </div>
</template>

<script>
import Title from '@/components/Title';
import CustomInput from '@/components/CustomInput';
import quiz from '@/questions.json';
export default {
  name: 'quiz-page',
  components: {
    Title,
    CustomInput,
  },
  data() {
    return {
      questions: quiz,
    };
  },
  computed: {
    getQuestions() {
      const routeId = this.$route.params.id;
      return quiz.questions[routeId + 1];
    },
  },
  methods: {
    selectedAnswer(value) {
      console.log(value);
    },
  },
};
</script>
