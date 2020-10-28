<template>
  <div class="button">
    <button>
      <p>{{ text }}</p>
      <img src="@/assets/images/arrow-icon.png" alt="arrow">{{ icon }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'button-component',
  props: { 
    text: String,
    icon: String,
  },
};
</script>

