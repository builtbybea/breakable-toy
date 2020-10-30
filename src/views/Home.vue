<template>
  <div class="home">
    <div class="figure">
      <img class="shojo-img" src="../assets/images/sailor.png" alt="sailor-moon">
      <img class="shonen-img" src="../assets/images/naruto.png" alt="naruto"> 
    </div>
    <div class="section">
      <Title msg="Which Anime Character Are You?" />
      <Button text="Start Quiz" />
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
};
</script>
