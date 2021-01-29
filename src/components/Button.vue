<template>
  <button :disabled="disabled" :class="['button', {'button--icon': icon,'button--left': align === 'left', 'button--right': align === 'right'} ]">
    <p>{{ text }}</p>
    <img v-if="icon" :src="icon" :alt="alt"> 
  </button>
</template>


<script>
export default {
  name: 'button-component',
  props: { 
    text: String,
    icon: String,
    align: String,
    alt: String, 
    disabled: Boolean,
  },
};
</script>


