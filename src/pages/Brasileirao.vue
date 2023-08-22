<script setup>
import useGetAPI from '../axios/axios.request';
import Table from "../components/Table.vue"

import { useStore } from "@/stores/campeonato.js";
import { watch } from 'vue';

const store  = useStore()
const {alterarNome, alterarRodada } = store

const {isReady, hasError, response} = useGetAPI("https://api.api-futebol.com.br/v1/campeonatos/10","Brasileirão");

const data = {
    isReady: isReady,
    hasError: hasError,
    response: response,
}

//observa a mudança na resposta e define os stores
watch(response, () => {
    alterarNome(response.value.nome_popular)
    alterarRodada(response.value.rodada_atual.rodada)
})

</script>
<template>
        <Table/>
</template>