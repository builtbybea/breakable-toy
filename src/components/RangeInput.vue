<template>
  <div class="range-input"> 
    <div class="range-input__wrapper">
      <label :for="id" class="range-input__label">
        <input
          :id="id"
          :value="value"
          class="range-input__button"
          type="range"
          :name="name"
          min="0"
          max="100"
          @change="selectedRange"
          @input="value = $event.target.value"
        >
        <span class="range-input__emoji-thumb" :style="{left: value + '%'}"> {{ getRating }} </span>
        <div class="range-input__slider" :style="{width: (value) + '%'}" />
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'range-input',
  props: {
    id: String,
    name: String,
  },
  data(){
    return {
      value: 0,
    };
  },
  computed: { 
    getRating(){
      const ratings = ['💩','🙁','😐','🙂','😊','😍'];
      return ratings[(Math.floor(this.value/20))];
    },
  },
  methods: {
    selectedRange(event) {
      this.$emit('get-range', event);
    },
  },
};
</script>

