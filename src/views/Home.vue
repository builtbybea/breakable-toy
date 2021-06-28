<template>
  <div class="home">
    <div class="home__images">
      <img class="home--image1" src="../assets/images/sailor.png" alt="sailor-moon">
      <img class="home--image2" src="../assets/images/naruto.png" alt="naruto"> 
    </div>
    <div class="home__content">
      <Title class="home__header" msg="Which Anime Character Are You?" />
      <Button class="home__button" text="Start Quiz" @click="goToFirstPage" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
import { mapActions } from 'vuex';

export default {
  name: 'home-page',
  components: {
    Title,
    Button,
  },
  methods: {
    ...mapActions('quiz', [
      'resetQuizAnswers',
    ]),
    goToFirstPage(){
      return this.$router.push('/quiz/1');
    },
  },
  created() {
    const currentRouteValuePath = this.$router.currentRoute.value.path;
    if(currentRouteValuePath === '/') {
      return this.resetQuizAnswers();
    }
  },
};
</script>
