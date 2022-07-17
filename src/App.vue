<script setup>
import Header from './components/Header.vue';
import Tabela from './components/Tabela.vue';
import Artilharia from './components/Artilharia.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header/>
  <Tabela/>
  <Artilharia/>
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
  src:  local("Oswald Light"),
        local("Oswald-Light"), 
        url('./Oswald/static/Oswald-Light.ttf');
}
</style>
