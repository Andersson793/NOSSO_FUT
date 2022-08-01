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
  font-family: Oswald;
}


@font-face {
  font-family: Oswald;
  src:  local("Oswald_Light"),
        local("Oswald Light"), 
        url('./Oswald/static/Oswald-Light.ttf');
}
</style>
