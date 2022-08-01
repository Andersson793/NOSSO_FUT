<script setup>
import Section from './Section.vue';
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';

const {isReady,hasError,data} = useGetAPI('campeonatos/2/tabela')

function setColor(i){
    if(i = 'v'){
        return 'green'
    }else if(i = 'd'){
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
                        <tr v-for="item in data">
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
                            <td v-for="item in item.partidas" title="útimos jogos" class="ult_partidas">
                                <i class="b-partidas"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Error v-else-if="hasError"/>
            <PreLoader width="300px" height="500px" v-else/>
        </div>
    </section>
</template>
<style scoped>
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
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
.table{
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