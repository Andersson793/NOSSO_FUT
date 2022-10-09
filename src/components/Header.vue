<script setup>
import Partidas from "./Partidas.vue";

</script>
<template>
    <header>
      <div class="nav-bar">
        <a href="https://nossofut.com/">
          <img src="../assets/logo.svg" alt="NOSSO FUT" height="30">
        </a>

        <a href="https://github.com/Andersson793/NOSSO_FUT">
          <img src="../assets/github.png" alt="GitHub" height="35">
        </a>
      </div>
      <Partidas/>
    </header>
</template>
<style scoped>
header{
  margin-bottom: 80px;
}

.nav-bar{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 9px 0 7px 0;
  background-color: #37F25F;
  box-shadow: 0px 2px 2px rgb(179, 179, 179); 
}

header nav a{
  margin: 0 20px;
}
</style>