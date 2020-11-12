<template>
  <div class="hello">
    <h1>
      {{ msg }}
    </h1>
    <h3>
      {{ subtitle }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'title',
  props: {
    msg: String,
    subtitle: String,
  },
};
</script>


