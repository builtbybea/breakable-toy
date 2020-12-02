<template>
  <div class="range-input"> 
    <div class="range-input__wrapper">
      <label :for="text" class="range-input__label">
        <input
          :id="text"
          v-model="value"
          class="range-input__button"
          :type="type"
          :name="name"
          min="0"
          max="100"
          @change="selectedRange"
        >
        <span class="range-input__emoji-thumb" :style="{left: value + '%'}"> {{ getRating }} </span>
        <!-- <span> {{ value }} </span> -->
        <div class="range-input__slider" :style="{width: (value) + '%'}" />
      </label>
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
      value: 0,
    };
  },
  computed: {
    increment() {
      let count = this.value;
      return count++;
    }, 
    getRating(){
      const ratings = ['💩','🙁','😐','🙂','😊','😍'];
      return ratings[(Math.floor(this.value/20))];
    },
  },
  methods: {
    selectedRange(value) {
      this.$emit('get-range', value);
    },
  },
};
</script>

