<script setup>
import Partidas from "./Partidas.vue";

</script>
<template>
    <header style="margin-bottom: 80px;">
      <div id="nav-bar" class="flex-space-around">
        <a href="https://nossofut.com/">
          <img src="../assets/logo.svg" alt="NOSSO FUT" height="30">
        </a>
        <div>Menu</div>
      </div>
      <Partidas/>
    </header>
</template>
<style scoped>
#nav-bar{
  padding: 9px 0 7px 0;
  background-color: #53f877;
  box-shadow: 0px 2px 2px rgb(179, 179, 179); 
}
</style>