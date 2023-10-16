<script setup>
import useGetAPI from '../axios/axios.request';
import Apoiadores from '../components/Apoiadores.vue';
import Table from "../components/Table.vue"
import { storeToRefs } from 'pinia';
import { useStore } from "@/stores/campeonato.js";
import { ref, watch } from 'vue';

const store  = useStore();
const {alterarNome, alterarCamp } = store;

const { nome, camp_model } = storeToRefs(store);

console.log("valor inicial: "+camp_model.value)

//com ref
var b = ref(useGetAPI(`https://api.api-futebol.com.br/v1/campeonatos/${camp_model.value}`));

watch(b.value, () => {
    alterarNome(b.value.data.nome_popular);
})

watch(camp_model, () => {
    b = ref(useGetAPI(`https://api.api-futebol.com.br/v1/campeonatos/${camp_model.value}`));
    console.log("(watch) campeonato_id: "+camp_model.value);
})

</script>
<template>
    <div class="pb-9 pt-24">
        <h1 class="text-center font-bold uppercase text-2xl mb-20">{{ nome }}</h1>
        <select :onchange="(e) => alterarCamp(e.target.value)" class="bg-white px-2 py-1 border-2 mb-2 text-sm sm:text-base" id="select" name="campeonatos">
            <option value="10">Série A</option>
            <option value="2">Série B</option>
        </select>
        <Table />
        <Apoiadores/>
    </div>
</template>