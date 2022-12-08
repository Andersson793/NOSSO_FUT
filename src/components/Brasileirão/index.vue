<script setup>
import useGetAPI from '../axios.config';
import Tabela from './Tabela.vue';
import Artilharia from './Artilharia.vue';
import { onBeforeUpdate, ref } from "vue";
import { useStore } from "@/stores/campeonato.js";
import { storeToRefs } from 'pinia'

const state  = storeToRefs(useStore());

//const {data,isReady,hasError} = useGetAPI("","Brasileirão");

console.log(state.alterarNome)


</script>
<template>
    <Tabela/>
    <Artilharia/>
</template>