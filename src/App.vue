<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<style>
body{
  font-family: Montserrat;
}

/* font */
@font-face {
  font-family: Montserrat;
  font-display: swap;
  src:  local("Montserrat-Regular"),
        url('./Montserrat-Regular.ttf');
}
</style>
