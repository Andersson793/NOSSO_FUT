<script setup>
import Partidas from "./Partidas.vue";
import { useStore } from "@/stores/campeonato.js";
import { storeToRefs } from 'pinia';

const store  = useStore()
const {nome} = storeToRefs(store)

</script>
<template>
    <header class="bg-green-400 border-b-4 border-neutral">
      <div class="flex justify-center py-2 items-center">
        <img class="h-10 mr-5 hidden sm:block" src="../assets/brasileiro-seriea.png" alt="">
        <h1 class="text-3xl sm:text-3xl text-white uppercase font font-bold">
          {{nome}}
        </h1>
        <div>
        </div>
      </div>
    </header>
    <Partidas/>
</template>