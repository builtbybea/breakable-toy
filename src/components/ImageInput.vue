<template>
  <div class="image-input">
    <input 
      :id="text" 
      :value="text" 
      class="image-input__button" 
      :type="type" 
      :name="name"
    >
    <img class="image-input__image" :src="image" :alt="text"> 
    <label :for="text" :class="['image-input__label', {'image-input__label--radio' :type==='radio'}]">
      <h3>{{ text }}</h3>
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
//v-if type === image-selection, show image, paragraph 
//v-else type === image-radio, show image and radio choice 
</script>
