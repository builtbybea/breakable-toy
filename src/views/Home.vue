<template>
  <div class="home">
    <Title msg="Which Anime Character Are You?" />
    <Button text="Start Quiz" />
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
