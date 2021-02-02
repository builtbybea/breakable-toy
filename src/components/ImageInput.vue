<template>
  <div class="image-input">
    <label :class="['image-input__label', {'image-input__label--radio' :type==='radio'}]">
      <input 
        :id="text" 
        :value="value" 
        class="image-input__button" 
        :type="type" 
        :name="name"
        @change="selectedAnswer"
      >
      <img class="image-input__image" :src="image" :alt="text"> 
      <h3 class="image-input--text">{{ text }}</h3>
    </label>
  </div>
</template>

<script>

export default {
  name: 'image-input',
  props: {
    text: String,
    value: String,
    type: String,
    name: String,
    image: String,
    alt: String,
  },
  methods: {
    selectedAnswer(value) {
      this.$emit('get-selected', value);
    },
  },
}; 
</script>
