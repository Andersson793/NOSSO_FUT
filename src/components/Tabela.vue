<script setup>
import Section from './Section.vue';
import instance from './axios.config.js';
import {onBeforeMount} from 'vue'
import {reactive} from 'vue'

const state = reactive({
    tabelaData: null,
    isReady: false
})

onBeforeMount(async  () => {
    await instance.get('campeonatos/2/tabela').then(
        (response) => {
            state.tabelaData = response.data
            state.isReady = true
        }
    )
})

console.log(state.tabelaData)

</script>
<template>
    <Section>
        <div class="title-content">
            <div>
                <h1>Tabela Brasileirão</h1>
                <h2>Serie A - 2022</h2>
            </div>
        </div>
        <div class="tabela" v-if="state.isReady">
            <table>
                <thead>
                    <th title="posição">#</th>
                    <th>Clube</th>
                    <th title="pontos">Pts</th>
                    <th title="jogos">J</th>
                    <th title="vitórias">V</th>
                    <th title="empates">E</th>
                    <th title="derrotas">D</th>
                    <th title="gols pro">GP</th>
                    <th title="golscontra">GC</th>
                    <th title="saldo de gols">SG</th>
                    <th title="aproveitamento">A(%)</th>
                    <th title="útimos jogos">Últ.Jogos</th>
                </thead>
                <tbody>
                    <tr v-for="item in state.tabelaData">
                        <td title="posição">
                            {{item.posicao}}°
                        </td>
                        <td>
                            {{item.time.nome_popular}}
                        </td>
                        <td title="pontos" class="bg-cell">
                            {{item.pontos}}
                        </td>
                        <td title="jogos">
                            {{item.jogos}}
                        </td>
                        <td title="vitórias" class="bg-cell">
                            {{item.vitorias}}
                        </td>
                        <td title="empates">
                            {{item.empates}}
                        </td>
                        <td title="derrotas" class="bg-cell">
                            {{item.derrotas}}
                        </td>
                        <td title="gols pro">
                            {{item.gols_pro}}
                        </td>
                        <td title="gols contra" class="bg-cell">
                            {{item.gols_contra}}
                        </td>
                        <td title="saldo de gols">
                            {{item.saldo_gols}}
                        </td>
                        <td title="aproveitamento" class="bg-cell">
                            {{item.aproveitamento}}
                        </td>
                        <td title="útimos jogos" class="ult_partidas">
                            <i class="b-partidas"></i>
                            <i class="b-partidas"></i>
                            <i class="b-partidas"></i>
                            <i class="b-partidas"></i>
                            <i class="b-partidas"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Section>
</template>
<style scoped>
.title-content{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

h1{
  font-size: 2.7em;
  color: #0ac500;
}

h2{
  text-align: right;
}
.tabela{
    max-width: 95vw;
    width: fit-content;
    overflow-x: auto;
}

table{
    border-collapse:collapse;
}

.ult_partidas{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.b-partidas{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: red;
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
    padding-right: 0;
}


th:nth-child(2),
td:nth-child(2){
    padding-right: 40px;
    text-align: left;
}

td:nth-child(3){
    font-weight:bold;
}

.bg-cell{
    background-color: #0000000e;
}
</style>