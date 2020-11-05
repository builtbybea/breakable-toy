<template>
  <div>
    <input id="answer" :type="type">
    <label for="answer">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    text: String,
    type: String,
  },
};
</script>

