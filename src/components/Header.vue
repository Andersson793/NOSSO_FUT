<script setup>
import Partidas from "./Partidas.vue";
import { useStore } from "@/stores/campeonato.js";
import { storeToRefs } from 'pinia';
import Select from "./Select.vue";
import { ref } from "vue";

const store  = useStore()
const {nome} = storeToRefs(store)

let isOpen = ref(false)

const altOpen = () => isOpen.value = !isOpen.value;

</script>
<template>
    <header class="bg-green-400 border-b-4 border-neutral">
      <div class="flex justify-center py-2 items-center">
        <img class="h-10 hidden sm:block" src="../assets/brasileiro-seriea.png" alt="">
        <h1 class="text-3xl mx-5 sm:text-3xl text-white uppercase font font-bold">
          {{nome}}
        </h1>
        <div class="cursor-pointer absolute right-8 hover:bg-gray-100/25 rounded-lg flex justify-center items-center p-1 hidden">
          <img @click="altOpen" class="w-6 h-auto" src="../assets/seta-para-baixo.png" alt="V">
        </div>
      </div>
      <Select :isOpen="isOpen"></Select>
    </header>
    <Partidas/>
</template>