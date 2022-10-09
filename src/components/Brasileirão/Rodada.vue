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
        <header>
            <p>{{data.rodada}}° RODADA</p>
        </header>
        <div class="content">
            <div v-for="item in data.partidas" class="partida">
                <small>{{item.estadio.nome_popular}} - {{item.data_realizacao}} às {{item.hora_realizacao}}</small>
                <div>
                    <img
                        :title="item.time_mandante.nome_popular"
                        :src="item.time_mandante.escudo"
                        :alt="item.time_mandante.nome_popular"
                    >
                    <span class="placar">{{item.placar_mandante}}</span>
                    <span class="placar">-</span>
                    <span class="placar">{{item.placar_visitante}}</span>
                    <img
                        :title="item.time_visitante.nome_popular"
                        :src="item.time_visitante.escudo"
                        :alt="item.time_visitante.nome_popular"
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

header{
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 200px;
    border-top: 1px solid #DFDEDE;
    border-bottom: 1px solid #DFDEDE;
    height: 53px;
}

.content{
    display: flex;
    flex-direction: column;
    width: 100%;
}

.partida div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.partida{
    border-bottom: 1px solid #DFDEDE;
    text-align: center;
    padding-bottom: 5px;
}

img{
    height: 40px;
    margin: 8px;
}

.placar{
    margin: 0 5px;
    font-size: 1.8em;
}

.status{
    background-color: black;
    padding: 2px 10px;
    border-radius: 14px;
    color: white;
    text-transform: uppercase;
}
</style>