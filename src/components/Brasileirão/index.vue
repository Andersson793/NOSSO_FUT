<script setup>
import useGetAPI from '../../axios/axios.request';
import Tabela from './Tabela.vue';
import Artilharia from './Artilharia.vue';

import { useStore } from "@/stores/campeonato.js";
import { watch, watchEffect } from 'vue';

const store  = useStore()
const {alterarNome, alterarRodada } = store

const {isReady, hasError, response} = useGetAPI("https://api.api-futebol.com.br/v1/campeonatos/10","Brasileirão");

//observa a mudança na resposta
watch(response, () => {
    alterarNome(response.value.nome_popular)
    alterarRodada(response.value.rodada_atual.rodada)
})

</script>
<template>
        <Tabela/>
</template>