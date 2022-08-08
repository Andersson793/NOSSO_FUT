<script setup>
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';
import useGetAPI from '../axios.config.js';

const {isReady,hasError,data} = useGetAPI('campeonatos/2/tabela')

function setColor(i){
    if(i == 'v'){
        return 'green'
    }else if(i == 'd'){
        return 'red'
    }else{
        return 'gray'
    }
}

</script>
<template>
    <section>
        <div class="title-content">
            <div>
                <h1>Tabela Brasileirão</h1>
                <h2>Serie A - 2022</h2>
            </div>
        </div>
        <div class="content">
            <div class="table" v-if="isReady">
                <table>
                    <thead>
                        <th title="posição">#</th>
                        <th>Clube</th>
                        <th title="Pontos">Pts</th>
                        <th title="Jogos">J</th>
                        <th title="Vitórias">V</th>
                        <th title="Empates">E</th>
                        <th title="Derrotas">D</th>
                        <th title="Gols pro">GP</th>
                        <th title="Gols contra">GC</th>
                        <th title="Saldo de gols">SG</th>
                        <th title="Aproveitamento">A(%)</th>
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
                            <td title="Gols pro">
                                {{item.gols_pro}}
                            </td>
                            <td title="Gols contra" class="bg-cell">
                                {{item.gols_contra}}
                            </td>
                            <td title="Saldo de gols">
                                {{item.saldo_gols}}
                            </td>
                            <td title="Aproveitamento" class="bg-cell">
                                {{item.aproveitamento}}
                            </td>
                            <td title="Útimos jogos" class="ult_partidas">
                                <i v-for="item in item.ultimos_jogos" :style="{backgroundColor:setColor(item)}" class="b-partidas"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Error v-else-if="hasError"/>
            <PreLoader v-else Width="650" Height="1000"/>
        </div>
    </section>
</template>
<style scoped>
.content{
    display: flex;
    justify-content: center;
}
.title-content{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

h1{
  font-size: 2.7em;
  color: #0ac500;
}

h2{
  text-align: right;
}
.table{
    max-width: 95vw;
    width: fit-content;
    overflow-x: auto;
}

table{
    border-collapse:collapse;
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

tr,thead{
    border-top: 1px solid #DFDEDE;
    cursor: pointer;
}

tbody > tr:hover{
    background-color: #f3f3f3;
}

th,td{
    text-align: center;
    height: 52px;
    padding: 0 18px;
}

th:nth-child(1),
td:nth-child(1){
    padding: 0;
}

th:nth-child(2),
td:nth-child(2){
    padding-right: 40px;
    padding-left: 10px;
    text-align: left;
}

td:nth-child(3){
    font-weight:bold;
}

.bg-cell{
    background-color: #0000000e;
}
</style>