<template>
  <div class="range-input"> 
    <input
      :id="text"
      :value="text"
      class="range-input__button"
      :type="type"
      :name="name"
      min="0"
      max="100"
    >
    <label :for="text" class="" />
  </div>
</template>

<script>
export default {
  name: 'range-input',
  props: {
    text: String,
    type: String,
    name: String,
  },
};
</script>

