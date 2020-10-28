<template>
  <div class="button">
    <button>
      <p>{{ text }}</p>
      <img src="@/assets/images/arrow-icon.png" alt="arrow">{{ iconAlign }}
    </button>
  </div>
</template>


<script>
export default {
  name: 'button-component',
  props: { 
    text: String,
    iconAlign: String,
  },
};
</script>


