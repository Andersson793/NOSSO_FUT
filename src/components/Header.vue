<script setup>
import Select from "./Select.vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

let isOpen = ref(false)

</script>
<template>
    <header class="bg-green-500 border-b-4 border-neutral">
      <div class="flex justify-center py-3  px-8 items-center">
        <div class="w-1/3">
          <img src="../assets/logo_transparente.svg" alt="NOSSO FUT" class="h-8">
        </div>
        <div class="w-full text-center text-white font-bold hidden sm:block">
          
          <a href="https://apoia.se/nosso_fut" class="mx-4"> Apoio </a>
          <RouterLink to="/termo" class="mx-4"> Termo de uso </RouterLink>
          <a href="https://github.com/Andersson793/NOSSO_FUT" class="mx-4">Código fonte</a>
          
        </div>
        <div class="w-1/3 flex justify-end">
          <div @click="isOpen = !isOpen" class="w-fit  cursor-pointer right-8 hover:bg-gray-100/25 rounded-lg flex justify-center items-center p-1">
            <img  class="w-6 h-auto" src="../assets/seta-para-baixo.png" alt="V">
          </div>
        </div>
      </div>
      <Select :isOpen="isOpen"></Select>
    </header>
</template>