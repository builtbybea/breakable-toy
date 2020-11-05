<template>
  <div class="quiz">
    <Title msg="What Are Your Favourite Genres To Watch?" />
    <InputButton text="Action" type="checkbox" />
  </div>
</template>

<script>
import Title from '@/components/Title';
import InputButton from '@/components/InputButtonType';
export default {
  name: 'quiz-page',
  components: {
    Title,
    InputButton,
  },
};
</script>
