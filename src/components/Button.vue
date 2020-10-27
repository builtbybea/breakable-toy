<template>
  <div class="button">
    <button>
      <p>{{ text }}</p>
    </button>
  </div>
</template>

<script>
export default {
  name: 'button',
  props: {
    text: String,
  },
};
</script>

