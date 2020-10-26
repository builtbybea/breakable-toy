<template>
  <div class="home">
    <Title msg="Which Anime Character Are You?"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue'

export default {
  name: 'home-page',
  components: {
    Title
  }
}
</script>
