<template>
  <div class="custom-input">
    <input 
      :id="name" 
      :value="text"
      class="custom-input__button" 
      :type="type" 
      @model="selectedOption" 
      @change="selectedAnswer"
    > 
    <label :for="name" :class="['custom-input__label', {'custom-input__label--checkbox' :type === 'checkbox','custom-input__label--radio' :type === 'radio'}]">
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
    name: String,
  },

  methods: {
    selectedAnswer(value) {
      this.$emit('get-selected', value);
    },
  },
};
</script>

