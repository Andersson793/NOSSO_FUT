<script setup>
import Section from './Section.vue';
import instance from './axios.config.js';
import {onBeforeMount} from 'vue'
import {reactive} from 'vue'

const state = reactive({
    tabelaData: null,
    isReady: false
})

onBeforeMount(() => {
    instance.get('campeonatos/2/tabela').then(
        (response) => {
            state.tabelaData = response.data
            state.isReady = true
            console.log(state.tabelaData[0])
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
                <h2>2023</h2>
            </div>
        </div>
        <div class="tabela" v-if="state.isReady">
            <table>
                <thead>
                    <th>#</th>
                    <th>Clube</th>
                    <th>Pts</th>
                    <th>J</th>
                    <th>V</th>
                    <th>E</th>
                    <th>D</th>
                    <th>GP</th>
                    <th>GC</th>
                    <th>SG</th>
                    <th>A(%)</th>
                    <th>Últ.Jogos</th>
                </thead>
                <tbody>
                    <tr v-for="item in state.tabelaData">
                        <td>
                            {{item.posicao}}
                        </td>
                        <td>
                            {{item.time.nome_popular}}
                        </td>
                        <td class="bg-cell">
                            {{item.pontos}}
                        </td>
                        <td>
                            {{item.jogos}}
                        </td>
                        <td class="bg-cell">
                            {{item.vitorias}}
                        </td>
                        <td>
                            {{item.empates}}
                        </td>
                        <td class="bg-cell">
                            {{item.derrotas}}
                        </td>
                        <td>
                            {{item.gols_pro}}
                        </td>
                        <td class="bg-cell">
                            {{item.gols_contra}}
                        </td>
                        <td>
                            {{item.saldo_gols}}
                        </td>
                        <td class="bg-cell">
                            {{item.aproveitamento}}
                        </td>
                        <td class="ult_partidas">
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
/*    border: 2px solid #DFDEDE;
    border-radius: 5px;
    padding: 5px;*/
    max-width: 95vw;
    width: fit-content;
    overflow-x: auto;
}

table{
    border-collapse:collapse;
}

.ult_partidas{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    min-height: 40px;
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
    padding: 13px 18px;
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

.bg-cell{
    background-color: #0000000e;
}
</style>