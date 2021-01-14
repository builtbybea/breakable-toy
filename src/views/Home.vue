<template>
  <div class="home">
    <div class="home__images">
      <img class="home--image1" src="../assets/images/sailor.png" alt="sailor-moon">
      <img class="home--image2" src="../assets/images/naruto.png" alt="naruto"> 
    </div>
    <div class="home__content">
      <Title class="home__header" msg="Which Anime Character Are You?" />
      <Button class="home__button" text="Start Quiz" @click="firstPage" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'home-page',
  components: {
    Title,
    Button,
  },
  methods: {
    goToFirstPage(){
      return this.$router.push('/quiz/1');
    },
  },
};
</script>
