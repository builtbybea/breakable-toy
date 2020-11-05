<template>
  <div>
    <input id="answer" :type="type">
    <label for="answer">{{ text }}</label>
  </div>
</template>

<script>
export default {
  name: 'input-button-type',
  props: {
    text: String,
    type: String,
  },
};
</script>

