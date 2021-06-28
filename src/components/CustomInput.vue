<template>
  <div class="custom-input">
    <input 
      :id="text" 
      :value="value"
      class="custom-input__button" 
      :type="type" 
      :name="name"
      @change="selectedAnswer"
    > 
    <img v-if="image" :class="{'custom-input__image': image}" :src="image" alt="">
    <label :for="text" :class="['custom-input__label', {'custom-input__label--checkbox' :type === 'checkbox','custom-input__label--radio' :type === 'radio'}]">
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
    image: String,
    value: String,
  },

  methods: {
    selectedAnswer(value) {
      this.$emit('get-selected', value);
    },
  },
};
</script>

