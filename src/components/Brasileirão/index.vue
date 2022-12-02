<script setup>
import useGetAPI from '../axios.config';
import Tabela from './Tabela.vue';
import Artilharia from './Artilharia.vue';
import { onBeforeUpdate, ref } from "vue";
import { useStore } from "../../stores/campeonato.js";
import { storeToRefs } from 'pinia'



</script>
<template>
    <Tabela/>
    <Artilharia/>
</template>
<!--
    <div class="mb-24 text-right w-fit m-auto" v-if="isReady">
        <h1 class="text-3xl sm:text-4xl text-green-600 uppercase">{{data.nome_popular}}</h1>
        <p class="text-2xl">{{data.edicao_atual.temporada}}</p>
    </div>
-->