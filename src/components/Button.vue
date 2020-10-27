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

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

</style>
