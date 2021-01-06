<template>
  <div 
    :class="[
      'star-input', 
      {
        'star-input--active': active,
        'star-input--hover': hover,
      },
    ]"
  >
    <label :for="text" class="star-input__label">
      <input 
        :id="text" 
        class="star-input__button"
        :value="text"
        :type="type"
        :name="name"
        @change="selectedRating"
        @focus="hover === true"
        @mouseover="hover === true"
        @blur="hover === false"
        @mouseleave="hover === false"
      >
      <svg 
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 19.481 19.481" 
        xmlns:xlink="http://www.w3.org/1999/xlink" 
        enable-background="new 0 0 19.481 19.481"
        class="star-input__svg-star"
      >
        <g>
          <path d="m10.201,.758l2.478,5.865 6.344,.545c0.44,0.038 0.619,0.587 0.285,0.876l-4.812,4.169 1.442,6.202c0.1,0.431-0.367,0.77-0.745,0.541l-5.452-3.288-5.452,3.288c-0.379,0.228-0.845-0.111-0.745-0.541l1.442-6.202-4.813-4.17c-0.334-0.289-0.156-0.838 0.285-0.876l6.344-.545 2.478-5.864c0.172-0.408 0.749-0.408 0.921,0z" />
        </g>
      </svg>
      <span class="star-input__star-number"> {{ text + 1 }} </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'star-input',
  props: {
    text: Number,
    type: String,
    name: String,
    active: Boolean,
    hover: Boolean,
  },
  methods: {
    selectedRating(event){
      // console.log(event.target.checked);
      this.$emit('rated', event);
    },
    mouseOver(){
      //console.log(event.target.onmouseOver);
      this.$emit('mouse-over', event);
    },
    mouseLeave() {
      this.$emit('mouse-leave', event);
    },
  },
};
</script>
