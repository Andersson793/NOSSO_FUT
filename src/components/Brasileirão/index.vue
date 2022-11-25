<script setup>
import useGetAPI from '../axios.config';
import Tabela from './Tabela.vue';
import Artilharia from './Artilharia.vue';
import { onBeforeUpdate, ref } from "vue";

const {isReady,hasError,data} = useGetAPI('campeonatos/10','Brasileirão')

var rodada = ref(null)

onBeforeUpdate(() => {
    rodada.value = data.value.rodada_atual.rodada
})

if(isReady && hasError){
    console.warn('Não foi possível carregar este componente')
}

</script>
<template>
    <div class="mb-24 text-right w-fit m-auto" v-if="isReady">
        <h1 class="text-3xl sm:text-4xl text-green-600 uppercase">{{data.nome_popular}}</h1>
        <p class="text-2xl">{{data.edicao_atual.temporada}}</p>
    </div>
    <Tabela :rodada="rodada"/>
    <Artilharia/>
</template>