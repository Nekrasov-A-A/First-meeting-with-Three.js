<template>
  <div id="app" class="wrapper">
    <Test />
  </div>
</template>

<script>
import Test from "./components/Test.vue";
export default {
  name: "App",
  components: { Test },
};
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap')


$mobile: 425px

*
  font-family: 'Montserrat'
  padding: 0
  margin: 0
  box-sizing: border-box
  cursor: default
.wrapper
  display: flex
  align-items: center
  justify-content: center
  min-height: 100vh
  background: hsl(150,2%,13%)
</style>
