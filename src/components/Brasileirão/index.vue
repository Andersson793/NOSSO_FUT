<script setup>
import useGetAPI from '../axios.config';
import Tabela from './Tabela.vue';
import Artilharia from './Artilharia.vue';
import { onBeforeUpdate, ref } from "vue";

//chamar a API
const {isReady,hasError,data} = useGetAPI('campeonatos/10','Brasileirão')

var rodada = ref(null)

onBeforeUpdate(() => {
    rodada.value = data.value.rodada_atual.rodada
})

</script>
<template>
    <div class="conteiner text-right item-center fit-content margin-bottom-90" v-if="isReady">
        <h1>{{data.nome_popular}}</h1>
        <p style="font-size:1.9em">{{data.edicao_atual.temporada}}</p>
    </div>
    <Tabela :rodada="rodada"/>
    <Artilharia/>
</template>