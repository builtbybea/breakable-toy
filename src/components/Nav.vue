<template>
  <nav id="nav">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
    <router-link to="/quiz/1">
      Quiz
    </router-link>
    <router-link to="/results">
      Results
    </router-link>
  </nav>
</template>
<script>

</script>
<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
