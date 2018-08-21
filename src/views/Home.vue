<template>
  <div class="home container">
    <img alt="Merchaholics logo"
         src="../assets/logo.jpg"
         height="100px"/>

    <HelloWorld style="color: #ff7e29; margin-top: 2%;"
                msg="MERCHAHOLICS"/>

    <iframe class="merchVideo"
            src="https://www.youtube.com/embed/aUa49yKO5Lk?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1"
            frameborder="0"
            allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

  .merchVideo {
    margin-top: 2%;
    width: 600px;
    height: 335px;
  }
  @media (max-width: 767.98px) {
    .merchVideo {
      max-width: 100%;
    }
  }

</style>

