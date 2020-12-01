<template>
  <div class="range-input"> 
    <div class="range-input__wrapper">
      <label :for="text" class="range-input__label" :style="getBackground">
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
        <!-- <label :for="text" class="range-input__label" :style="getSliderBackground" /> -->
        <div class="range-input__slider" :style="getBackgroundSlider">
          <span class="range-input__emoji-thumb"> {{ getRating }} </span>
          <span> {{ value }} </span>
        </div>
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
      testerStyle: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        background: '#c4c4c4',
        height: '6px',
        borderRadius: '10px',
        zIndex: '2',
      },
      testerBackground: {
        background: '#ef597a',
        zIndex: '1',
      },
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
    getBackground(){
      const color = this.testerStyle;
      return color;
    },
  },
  methods: {
    selectedRange(value) {
      this.$emit('get-range', value);
    },
    getBackgroundSlider() {
      return this.testerBackground;
    },
  },
};
</script>

