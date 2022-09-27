<script setup>
import { onBeforeUpdate, onUpdated } from 'vue';
import useGetAPI from '../axios.config.js';

const props = defineProps({
  rodada: Number
})

var {isReady,hasError,data} = useGetAPI(`campeonatos/10/rodadas/${props.rodada}`,'Brasileirão')

onBeforeUpdate(() => {
    console.log(data)
})


</script>
<template>
    <div v-if="isReady" id="rodada">
        <header>
            <span>l</span>
            <span>{{data.rodada}}</span>
            <span>r</span>
        </header>
        <div class="content">
            <div class="partida">
            </div>
            <div class="partida"></div>
            <div class="partida"></div>
            <div class="partida"></div>
            <div class="partida"></div>
            <div class="partida"></div>
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
    justify-content: space-between;
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

.content .partida{
    border-bottom: 1px solid #DFDEDE;
    height: 90px;
    width: 100%;
}
</style>