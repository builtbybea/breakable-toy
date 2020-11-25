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
      @change="selectedRange"
    >
    <label :for="text" class="range-input__label" />
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

  methods: {
    selectedRange(value) {
      this.$emit('get-range', value);
    },
  },
};
</script>

