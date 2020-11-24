<template>
  <div class="image-input">
    <label :for="text" :class="['image-input__label', {'image-input__label--radio' :type==='radio'}]">
      <input 
        :id="text" 
        :value="text" 
        class="image-input__button" 
        :type="type" 
        :name="name"
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
    type: String,
    name: String,
    image: String,
    alt: String,
  },
}; 
</script>
