<script setup>
import useGetAPI from '../axios.config.js';

//props
const props = defineProps({
  rodada: Number
})

//chamar API
const {isReady,hasError,data} = useGetAPI(`campeonatos/10/rodadas/${props.rodada}`,'Brasileirão')

</script>
<template>
    <div v-if="isReady" id="rodada">
        <header class="flex-items-center align-center border-style-bottom border-style-top">
            <p class="bold">{{data.rodada}}° RODADA</p>
        </header>
        <div class="flex-direction-column">
            <div v-for="item in data.partidas" class="conteiner text-center border-style-bottom">
                <small>{{item.estadio.nome_popular}} - {{item.data_realizacao}} às {{item.hora_realizacao}}</small>
                <div class="flex-items-center align-center">
                    <img
                        :title="item.time_mandante.nome_popular"
                        :src="item.time_mandante.escudo"
                        :alt="item.time_mandante.nome_popular"
                        height="40"
                    >
                    <div class="placar">
                        <span>{{item.placar_mandante}}</span>
                        <span>-</span>
                        <span>{{item.placar_visitante}}</span>
                    </div>
                    <img
                        :title="item.time_visitante.nome_popular"
                        :src="item.time_visitante.escudo"
                        :alt="item.time_visitante.nome_popular"
                        height="40"
                    >
                </div>
                <small class="status">{{item.status}}</small>
            </div>
        </div>
    </div>
</template>
<style scoped>
#rodada{
    margin-left: 15px;
}

.placar span{
    margin: 0 5px;
    font-size: 1.8em;
}

header{
    height: 53px;
}

img{
    margin: 8px;
}

.status{
    background-color: black;
    padding: 2px 10px;
    border-radius: 14px;
    color: white;
    text-transform: uppercase;
}
</style>