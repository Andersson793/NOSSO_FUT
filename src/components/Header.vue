<script setup>
import Partidas from "./Partidas.vue";
</script>
<template>
    <header class="bg-green-400 border-b-4 border-neutral">
      <div class="flex justify-evenly py-2 items-center">

        <!--logo-->
        <a href="https://nossofut.com/">
          <img class="h-9" src="../assets/logo.svg" alt="NOSSO FUT">
        </a>

        <div>
          <a href="https://apoia.se/nosso_fut">
            <img title="github" class="h-5" src="../assets/apoia-se.png" alt="github do site">
          </a>
        </div>
      </div>
    </header>
    <Partidas/>
</template>