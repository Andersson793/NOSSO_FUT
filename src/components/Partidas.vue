<script setup>
import useGetAPI from './axios.config.js';
const {isReady,hasError,data} = useGetAPI('ao-vivo','Partidas')

</script>
<template>
    <div class="conteiner flex align-center scroll">
        <div v-for="item in data" class="partidas text-center">
            <small class="bold">{{item.campeonato.nome}}</small>
            <div class=" flex-items-center align-center text-center">
                <img
                    :alt="item.time_mandante.nome_popular"
                    :src="item.time_mandante.escudo"
                    :title="item.time_mandante.nome_popular"
                >
                <div class="placar margin-0-10 bold">
                    <span>{{item.placar_mandante}}</span>
                    <span>-</span>
                    <span>{{item.placar_visitante}}</span>
                </div>
                <img
                    :alt="item.time_visitante.nome_popular"
                    :src="item.time_visitante.escudo"
                    :title="item.time_visitante.nome_popular"
                >
            </div>
            <small class="text-gray">Estádio {{item.estadio.nome_popular}}</small>
        </div>
    </div>
</template>
<style scoped>
.partidas{
    border-right: 1px solid #DFDEDE;
    padding: 0 17px;
}

.partidas img{
    height: 32px;
    width: auto;
    margin: 8px 0;
}

.placar span{
    font-size: 1.4em;
    margin: 0 5px;
}
</style>