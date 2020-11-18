<template>
  <div class="image-input">
    <img :src="image" :alt="alt"> 
    <input
      :id="text" 
      :value="text" 
      class="image-input__button" 
      :type="type" 
      :name="name"
    >
    <label v-if="type === image-selection" :for="text">
      {{ text }}
    </label>
    <CustomInput v-if="type === image-radio" />
  </div>
</template>

<script>
import CustomInput from '@/components/CustomInput';

export default {
  name: 'image-input',
  components: {
    CustomInput,
  },
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
