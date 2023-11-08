<script setup>
import useGetAPI from '../axios/axios.request';
import Apoiadores from '../components/Apoiadores.vue';
import Table from "../components/Table.vue"
import { storeToRefs } from 'pinia';
import { useStore } from "@/stores/campeonato.js";
import { ref, watch } from 'vue';

const store  = useStore();
const {rodada, alterarNome, alterarCamp , alterarRodada } = store;

const { nome, camp_model } = storeToRefs(store);

var b = ref(useGetAPI(`https://api.api-futebol.com.br/v1/campeonatos/${camp_model.value}`));

watch(camp_model, () => {
    b = ref(useGetAPI(`https://api.api-futebol.com.br/v1/campeonatos/${camp_model.value}`));
})

watch(b.value, () => {
    alterarNome(b.value.data.edicao_atual.nome_popular);
    alterarRodada(b.value.data.rodada_atual.nome);
    console.log(b.value.data)
})

</script>
<template>
    <div class="pb-9 pt-24">
        <h1 class="text-center font-bold uppercase text-2xl mb-20">{{ nome }}</h1>
        <Table/>
        <Apoiadores/>
    </div>
</template>