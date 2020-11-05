<template>
  <div class="quiz">
    <Title msg="What Are Your Favourite Genres To Watch?" />
    <CustomInput text="Action" type="checkbox" />
  </div>
</template>

<script>
import Title from '@/components/Title';
import CustomInput from '@/components/CustomInput';
export default {
  name: 'quiz-page',
  components: {
    Title,
    CustomInput,
  },
};
</script>
