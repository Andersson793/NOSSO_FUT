<script setup>
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';
import useGetAPI from '../axios.config.js';
import Rodada from './Rodada.vue';

const {isReady,hasError,data} = useGetAPI('campeonatos/10/tabela','Tabela')

function setColor(i){
    if(i == 'v'){
        return '#2BCC38'
    }else if(i == 'd'){
        return '#CD2C2C'
    }else{
        return '#ACACAC'
    }
}

const props = defineProps({
    rodada:Number
})

const th_style = "px-4 h-14";
const td_style = "px-4 h-14 text-center";
const td_bg  = "bg-neutral-100";

</script>
<template>
    <section>
        <div class="flex justify-center px-1.5">
            <div class="max-w-full overflow-scroll">
                <select class="bg-white px-2 py-1 border-2 mb-2 text-sm sm:text-base" v-show="isReady" id="select" name="campeonatos">
                    <option value="">Série A</option>
                    <option disabled value="">Série B</option>
                    <option disabled value="">Série C</option>
                </select>
                <div class="flex sm:justify-center items-start" v-if="isReady">
                    <table class="mr-5 text-sm sm:text-base whitespace-nowrap">
                        <thead class="border-t-2 border-gray-200">
                            <th class="px-1 text-left" title="Posição">#</th>
                            <th class="text-left w-" title="Clube">Clube</th>
                            <th :class="th_style" title="Pontos">Pts</th>
                            <th :class="th_style" title="Jogos">J</th>
                            <th :class="th_style" title="Vitórias">V</th>
                            <th :class="th_style" class="hidden sm:table-cell" title="Empates">E</th>
                            <th :class="th_style" class="hidden sm:table-cell" title="Derrotas">D</th>
                            <th :class="th_style" class="hidden sm:table-cell" title="Gols pró">GP</th>
                            <th :class="th_style" class="hidden sm:table-cell" title="Gols contra">GC</th>
                            <th :class="th_style" title="Saldo de gols">SG</th>
                            <th :class="th_style" title="Aproveitamento">Apr.</th>
                            <th :class="th_style" title="Últimos jogos">Últ.Jogos</th>
                        </thead>
                        <tbody>
                            <tr class="border-t-2 border-gray-200 hover:bg-gray-50" v-for="item in data">
                                <td class="px-1" title="Posição">
                                    {{item.posicao}}°
                                </td>
                                <td class="pr-8">
                                    {{item.time.nome_popular}}
                                </td>
                                <td :class="[td_style,td_bg]" class="font-bold" title="Pontos">
                                    {{item.pontos}}
                                </td>
                                <td :class="td_style" title="Jogos">
                                    {{item.jogos}}
                                </td>
                                <td :class="[td_style,td_bg]" title="Vitórias">
                                    {{item.vitorias}}
                                </td>
                                <td :class="td_style" class="hidden sm:table-cell" title="Empates">
                                    {{item.empates}}
                                </td>
                                <td :class="[td_style,td_bg]" class="hidden sm:table-cell" title="Derrotas">
                                    {{item.derrotas}}
                                </td>
                                <td :class="td_style" class="hidden sm:table-cell" title="Gols pro">
                                    {{item.gols_pro}}
                                </td>
                                <td :class="[td_style,td_bg]" class="hidden sm:table-cell" title="Gols contra">
                                    {{item.gols_contra}}
                                </td>
                                <td :class="td_style" title="Saldo de gols">
                                    {{item.saldo_gols}}
                                </td>
                                <td :class="[td_style,td_bg]" title="Aproveitamento">
                                    {{item.aproveitamento.toFixed(0)}}%
                                </td>
                                <td :class="td_style" class="flex justify-center items-center" title="Útimos jogos">
                                    <i 
                                        v-for="item in item.ultimos_jogos"
                                        class="rounded-full h-2 w-2 mr-1"
                                        :style="{backgroundColor:setColor(item)}"
                                    ></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Rodada :rodada="rodada"/> 
                </div>
                <Error v-else-if="hasError"/>
                <PreLoader v-else :prop_width="800" :prop_height="1100"/>
            </div>
        </div>
    </section>   
</template>
<style scoped>
tbody tr:nth-last-child(-n+4) td:first-of-type{
    color: #ff0000;
}
tbody tr:nth-child(-n+12) td:first-of-type{
    color: #ffa500;
}
tbody tr:nth-child(-n+6) td:first-of-type{
    color: #008000;
}
</style>