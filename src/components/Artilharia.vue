<script setup>
import Section from './Section.vue';
import TitleSections from './TitleSections.vue';
import instance from './axios.config.js';
import { onBeforeMount} from 'vue';
import {reactive} from 'vue';

const state = reactive({
    isReady: false,
    artilhariaData: null
})

onBeforeMount(() => {
    instance.get('campeonatos/2/artilharia').then(
        (response) => {
            state.artilhariaData = response.data
            console.log(state.artilhariaData)
        }
    )
})

</script>
<template>
    <Section>
        <TitleSections>
            Ranking de Artilharia
        </TitleSections>
        <table>
            <tbody>
                <tr v-for="(item,index) in state.artilhariaData">
                    <td>{{index+1}}°</td>
                    <td><img :src="item.time.escudo" height="30"></td>
                    <td>{{item.atleta.nome_popular}}</td>
                    <td>{{item.gols}} Gols</td>
                </tr>
            </tbody>
        </table>
    </Section>
</template>
<style scoped>
table{
    border-collapse:collapse;
    width: fit-content;
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
td:nth-child(2){
    padding-right: 0;
}

td:nth-child(3){
    padding-right: 50px;
    text-align: left;
}
</style>