<template>
  <div class="range-input"> 
    <div class="range-input--slider">
      <input
        :id="text"
        :value="value"
        class="range-input__button"
        :type="type"
        :name="name"
        min="0"
        max="100"
        @change="selectedRange"
      >
      <label :for="text" class="range-input__label" />
    </div>
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
  data(){
    return {
      value: 50,
    };
  },

  methods: {
    selectedRange(value) {
      this.$emit('get-range', value);
    },
  },
};
</script>

