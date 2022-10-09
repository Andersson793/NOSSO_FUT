<script setup>
import useGetAPI from './axios.config.js';
const {isReady,hasError,data} = useGetAPI('ao-vivo','Partidas')

</script>
<template>
    <div id="conteiner-partidas">
        <div v-for="item in data" class="partidas">
            <small class="partidas-campeonato">{{item.campeonato.nome}}</small>
            <div>
                <img
                    :alt="item.time_mandante.nome_popular"
                    :src="item.time_mandante.escudo"
                    :title="item.time_mandante.nome_popular"
                >
                <div class="placar">
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
            <small class="partidas-estadio">Estádio {{item.estadio.nome_popular}}</small>
        </div>
    </div>
</template>
<style scoped>
#conteiner-partidas{
    margin-top: 10px;
    display: flex;
    align-items: center;
    overflow-x: auto;
}
.partidas{
    text-align: center;
    border-right: 1px solid #DFDEDE;
    padding: 0 20px;
}

.partidas > div{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.partidas img{
    height: 32px;
    margin: 8px 0;
}

.partidas .time_sigla{
    font-size: 1.1em;
    margin: 0 8px;
}

.partidas-estadio{
    color: rgb(122, 122, 122);
}

.partidas-campeonato{
    font-weight: bold;
}

.placar{
    margin: 0 10px;
}

.placar span{
    margin:0 5px;
    font-size: 1.4em;
    font-weight: bold;
}
</style>