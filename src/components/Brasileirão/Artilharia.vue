<script setup>
import TitleSections from '../TitleSections.vue';
import useGetAPI from '../axios.config.js';
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';

const {isReady,hasError,data} = useGetAPI('/campeonatos/2/artilharia')

console.log(data)

</script>
<template>
    <section>
        <TitleSections>
            Ranking de Artilharia
        </TitleSections>
        <div class="content">
            <table v-if="isReady">
                <tbody>
                    <tr v-for="(item,index) in data">
                        <td>{{index+1}}°</td>
                        <td><img :src="item.time.escudo" height="30"></td>
                        <td>{{item.atleta.nome_popular}}</td>
                        <td>{{item.gols}}</td>
                        <td>Gols</td>
                    </tr>
                </tbody>
            </table>
            <Error v-else-if="hasError"/>
            <PreLoader v-else/>
        </div>
    </section>
</template>
<style scoped>
.content{
    display: flex;
    justify-content: center;
}

table{
    width: fit-content;
    border-collapse:collapse;
}

table tr{
    border-top: 1px solid #DFDEDE;
}

tr{
    cursor: pointer;
}

tbody > tr:hover{
    background-color: #f3f3f3;
}

th,td{
    text-align: center;
    padding: 10px 15px;
}

td:nth-child(1),
td:nth-child(2),
td:nth-child(4){
    padding-right: 0;
}

td:nth-child(3){
    padding-right: 50px;
    text-align: left;
}

td:last-of-type{
    font-weight:bold;
}
</style>