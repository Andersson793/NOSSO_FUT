<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Brasileirao from './pages/Brasileirao.vue';
import Apoiadores from './components/Apoiadores.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <Header/>
  <RouterView />
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
