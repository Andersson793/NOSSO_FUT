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
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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
