<script setup>
import Section from './Section.vue';
import instance from './axios.config.js';

var rTabela;

instance.get('campeonatos/2/tabela').then(
    (response) => {
        rTabela = response.data
        console.log(rTabela)
    }
)

</script>
<template>
    <Section>
        <div class="title-content">
            <div>
                <h1>Tabela Brasileirão</h1>
                <h2>2023</h2>
            </div>
        </div>
        <div class="tabela">
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
                    <tr v-for="item in rTabela">
                        <td>1°</td>
                        <td>{{item.time.nome_popular}}</td>
                        <td class="bg-cell">28</td>
                        <td>14</td>
                        <td class="bg-cell">5</td>
                        <td>67</td>
                        <td class="bg-cell">4</td>
                        <td>36</td>
                        <td class="bg-cell">13</td>
                        <td>7</td>
                        <td class="bg-cell">75.2</td>
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
    border: 2px solid #DFDEDE;
    border-radius: 5px;
    padding: 5px;
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

tr{
    cursor: pointer;
}

tbody > tr:hover{
    background-color: #f3f3f3;
}

th,td{
    text-align: center;
    padding: 8px 15px;
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