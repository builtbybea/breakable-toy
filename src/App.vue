<template>
  <pre class="_debug">
    {{ $store.state.quiz.userAnswers }}
    </pre>
  <div class="main">
    <Nav />
    <router-view />
  </div>
</template>
<script>

import Nav from '@/components/Nav';

export default {
  components : {
    Nav,
  },
  created() {
    console.log('hiya');
  },
};

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
._debug {
  position: fixed;
  top: 0;
  right: 0;
  padding: 5px;
  background: rgba(black, 0.8);
  z-index: 9999;
  margin: 0;
  color: white;
}

</style>
