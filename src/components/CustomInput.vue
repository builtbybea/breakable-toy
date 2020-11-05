<template>
  <div>
    <label for="answer" :class="['label', {'label--checkbox' :type === 'checkbox','label--radio' :type === 'radio'}]">
      <input id="answer" :type="type" @model="selectedOption" @change="selectedAnswer">
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    text: String,
    type: String,
  },

  methods: {
    selectedAnswer(value) {
      this.$emit('get-selected', value);
    },
  },
};
</script>

