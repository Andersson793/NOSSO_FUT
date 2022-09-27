<script setup>
import useGetAPI from '../axios.config';
import Tabela from './Tabela.vue';
import Artilharia from './Artilharia.vue';
import { onBeforeUpdate, onUpdated, ref } from "vue";

//chamar a API
const {isReady,hasError,data} = useGetAPI('campeonatos/10','Brasileirão')

var rodada = ref(null)

onBeforeUpdate(() => {
    rodada.value = data.value.rodada_atual.rodada
})

</script>
<template>
    <div id="title" v-if="isReady">
        <h1>{{data.nome_popular}}</h1>
        <p>{{data.edicao_atual.temporada}}</p>
    </div>
    <Tabela :rodada="rodada"/>
    <Artilharia/>
</template>
<style scoped>
#title{
    width: fit-content;
    text-align: right;
    margin: 0 auto;
    margin-bottom: 70px;
}

h1{
  font-size: 2.7em;
  color: #0ac500;
  text-align: center;
  text-transform: uppercase;
}

p{
    font-size: 1.8em;
}
</style>