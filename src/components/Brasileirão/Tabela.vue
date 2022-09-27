<script setup>
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';
import useGetAPI from '../axios.config.js';
import {ref } from 'vue';
import Rodada from './Rodada.vue';

const {isReady,hasError,data} = useGetAPI('campeonatos/10/tabela','Tabela')

const isSmallDevice = ref(false);

if(window.innerWidth <= 400){isSmallDevice.value = true}

function setColor(i){
    if(i == 'v'){
        return 'green'
    }else if(i == 'd'){
        return 'red'
    }else{
        return 'gray'
    }
}

const props = defineProps({
    rodada:Number
})

</script>
<template>
    <section>
        <div class="content">
            <div>
                <select v-show="isReady" id="select" name="campeonatos">
                    <option value="">Série A</option>
                    <option disabled value="">Série B</option>
                    <option disabled value="">Série C</option>
                </select>
                <div class="tabela" v-if="isReady">
                    <table>
                        <thead>
                            <th title="posição">#</th>
                            <th>Clube</th>
                            <th title="Pontos">Pts</th>
                            <th title="Jogos">J</th>
                            <th title="Vitórias">V</th>
                            <th title="Empates">E</th>
                            <th title="Derrotas">D</th>
                            <th title="Gols pro" :class="{hidden:isSmallDevice}">GP</th>
                            <th title="Gols contra" :class="{hidden:isSmallDevice}">GC</th>
                            <th title="Saldo de gols">SG</th>
                            <th title="Aproveitamento">Apr.</th>
                            <th title="Últimos jogos">Últ.Jogos</th>
                        </thead>
                        <tbody>
                            <tr v-for="item in data">
                                <td title="Posição">
                                    {{item.posicao}}°
                                </td>
                                <td>
                                    {{item.time.nome_popular}}
                                </td>
                                <td title="Pontos" class="bg-cell">
                                    {{item.pontos}}
                                </td>
                                <td title="Jogos">
                                    {{item.jogos}}
                                </td>
                                <td title="Vitórias" class="bg-cell">
                                    {{item.vitorias}}
                                </td>
                                <td title="Empates">
                                    {{item.empates}}
                                </td>
                                <td title="Derrotas" class="bg-cell">
                                    {{item.derrotas}}
                                </td>
                                <td title="Gols pro" :class="{hidden:isSmallDevice}">
                                    {{item.gols_pro}}
                                </td>
                                <td title="Gols contra" class="bg-cell" :class="{hidden:isSmallDevice}">
                                    {{item.gols_contra}}
                                </td>
                                <td title="Saldo de gols">
                                    {{item.saldo_gols}}
                                </td>
                                <td title="Aproveitamento" class="bg-cell">
                                    {{item.aproveitamento.toFixed(0)}}%
                                </td>
                                <td title="Útimos jogos" class="ult_partidas">
                                    <i v-for="item in item.ultimos_jogos" :style="{backgroundColor:setColor(item)}" class="b-partidas"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Rodada  :rodada="props.rodada"/>
                </div>
                <Error v-else-if="hasError"/>
                <PreLoader v-else Width="650" Height="1000"/>
                <div v-show="isReady" class="info">
                    <i class="info-color" style="background-color: #008000;"></i>
                    <small>Libertadores</small>
                    <i class="info-color" style="background-color: #ffa500;"></i>
                    <small>Sul-americana</small>
                    <i class="info-color" style="background-color: #ff0000;"></i>
                <small>Rebaixamento</small>
            </div>
            </div>
        </div>
    </section>   
</template>
<style scoped>
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content div{
    width: fit-content;
}

.tabela{
    max-width: 95vw;
    width: fit-content;
    overflow-x: auto;
    display: flex;
}

#select{
    width: fit-content;
    margin-bottom: 20px;
    padding: 5px 8px;
    background-color: white;
    border: 1px solid gray;
}

table{
    border-collapse:collapse;
    max-width: 200px;
}

tbody tr:nth-last-child(-n+4) td:first-of-type{
    color: #ff0000;
}

tbody tr:nth-child(-n+12) td:first-of-type{
    color: #ffa500;
}

tbody tr:nth-child(-n+6) td:first-of-type{
    color: #008000;
}

h2{
  text-align: right;
}

tr,thead{
    cursor: pointer;
    border-top: 1px solid #DFDEDE;
}

tbody > tr:hover{
    background-color: #f3f3f3;
}

th,td{
    height: 52px;
    text-align: center;
    padding: 0 18px;
}

th:nth-child(1),
td:nth-child(1){
    padding: 0;
}

th:nth-child(2),
td:nth-child(2){
    min-width: 130px;
    padding-left: 10px;
    text-align: left;
    margin: 1px 0;
}

.ult_partidas{
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    width: 90px;
}

.b-partidas{
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.hidden{
    display: none;
}

.bg-cell{
    background-color: #0000000e;
}

.info{
    margin-top: 25px;
    display: flex;
    align-items: center;
}

.info-color:first-of-type{
    margin-left: 0;
}

.info-color{
    height: 10px;
    width: 10px;
    border-radius: 2px;
    margin-right: 12px;
    margin-left: 25px;
}
</style>