<template>
  <div class="home">
    <div class="home__images">
      <img class="home--image1" src="../assets/images/sailor.png" alt="sailor-moon">
      <img class="home--image2" src="../assets/images/naruto.png" alt="naruto"> 
    </div>
    <div class="home__content">
      <Title class="home__header" msg="Which Anime Character Are You?" />
      <Button class="home__button" text="Start Quiz" @click="goToFirstPage" />
      {{ fullName }}
      {{ count }}
      {{ countTest }}
      <button @click="incrementCount(10)">
        Add 10
      </button>
      <button @click="incrementCount(20)">
        Add 20
      </button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import Button from '@/components/Button.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home-page',
  components: {
    Title,
    Button,
  },
  computed: {
    ...mapGetters('example',[
      'count',
      'fullName',
    ]), 
    ...mapGetters('example', {
      countTest: 'count',
    }),
  },
  watch: {
    count(newCount, oldCount) {
      if(newCount > 30) {
        this.goToFirstPage();
      }
      console.log('count changed', newCount, oldCount);
    },
  },
  methods: {
    ...mapActions('example', [
      'incrementCount',
    ]),
    goToFirstPage(){
      return this.$router.push('/quiz/1');
    },
    // incrementCount(number){
    //   console.log('hello');
    //   this.$store.dispatch('quiz/incrementCount', number);
    // },
  },
};
</script>
