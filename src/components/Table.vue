<script setup>
import { ref, watch } from "vue";
import useGetAPI from "../axios/axios.request";
import Error from "./Error.vue";
import PreLoader from './PreLoader.vue';

import { storeToRefs } from 'pinia';
import { useStore } from "@/stores/campeonato.js";

const store  = useStore();
const {alterarNome, alterarCamp } = store;

const { nome, camp_model } = storeToRefs(store);

var s = ref(useGetAPI(`campeonatos/${camp_model.value}/tabela`));

function defineColor(i){
    if(i == 'v'){
        return '#2BCC38'
    }else if(i == 'd'){
        return '#CD2C2C'
    }else{
        return '#ACACAC'
    }
}

watch(camp_model, () => {
   s = ref(useGetAPI(`campeonatos/${camp_model.value}/tabela`));
})

</script>
<template>
    <section>
        <div class="flex justify-center px-1.5">
            <div class="max-w-full overflow-scroll">
                <select class="bg-white px-2 py-1 border-2 mb-2 text-sm sm:text-base" :onchange="(e) => campeonato_idx = e.target.value" v-show="false" id="select" name="campeonatos">
                    <option value="10">Série A</option>
                    <option value="14">Série B</option>
                </select>
                <div class="" v-if="s.isReady">
                    <table class="mr-5 text-sm sm:text-base whitespace-nowrap">
                        <thead class="border-t-2 border-gray-200">
                            <th class="px-1 text-left" title="Posição">#</th>
                            <th class="text-left w-" title="Clube">Clube</th>
                            <th class="w-14 h-14" title="Pontos">Pts</th>
                            <th class="w-14 h-14" title="Jogos">J</th>
                            <th class="w-14 h-14" title="Vitórias">V</th>
                            <th class="w-14 h-14 hidden sm:table-cell" title="Empates">E</th>
                            <th class="w-14 h-14 hidden sm:table-cell" title="Derrotas">D</th>
                            <th class="w-14 h-14 hidden sm:table-cell" title="Gols pró">GP</th>
                            <th class="w-14 h-14 hidden sm:table-cell" title="Gols contra">GC</th>
                            <th class="w-14 h-14" title="Saldo de gols">SG</th>
                            <th class="w-14 h-14" title="Aproveitamento">Apr.</th>
                            <th class="w-14 h-14 px-3" title="Aproveitamento">Ult. jogos</th>
                        </thead>
                        <tbody>
                            <tr class="border-t-2 border-gray-200 hover:bg-gray-50" v-for="item in s.data">
                                <td class="px-1" title="Posição">
                                    {{ item.posicao }}°
                                </td>
                                <td class="pr-8">
                                    {{ item.time.nome_popular }}
                                </td>
                                <td class="h-14 text-center bg-neutral-100 font-bold" title="Pontos">
                                    {{ item.pontos }}
                                </td>
                                <td class="h-14 text-center" title="Jogos">
                                    {{ item.jogos }}
                                </td>
                                <td class="h-14 text-center bg-neutral-100" title="Vitórias">
                                    {{ item.vitorias }}
                                </td>
                                <td class="h-14 text-center hidden sm:table-cell" title="Empates">
                                    {{ item.empates }}
                                </td>
                                <td class="h-14 text-center bg-neutral-100 hidden sm:table-cell" title="Derrotas">
                                    {{ item.derrotas }}
                                </td>
                                <td class="h-14 text-center hidden sm:table-cell" title="Gols pro">
                                    {{ item.gols_pro }}
                                </td>
                                <td class="h-14 text-center bg-neutral-100 hidden sm:table-cell" title="Gols contra">
                                    {{ item.gols_contra }}
                                </td>
                                <td class="h-14 text-center" title="Saldo de gols">
                                    {{ item.saldo_gols }}
                                </td>
                                <td class="px-3 h-14 text-center bg-neutral-100" title="Aproveitamento">
                                    {{ item.aproveitamento.toFixed(0) }} %
                                </td>
                                <td class="h-14 text-center flex justify-center items-center" title="Útimos jogos">
                                    <i 
                                        v-for="item in item.ultimos_jogos"
                                        class="h-2.5 w-2.5 mr-1 rounded"
                                        :style="{backgroundColor:defineColor(item)}"
                                    ></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="mt-5">
                        <div class="h-2.5 w-2.5 bg-emerald-500 inline-block mr-2 rounded-sm"></div>
                        <small class="mr-6">Libertadores</small>

                        <div class="h-2.5 w-2.5 bg-yellow-500 inline-block mr-2 rounded-sm"></div>
                        <small class="mr-6">Sul-americana</small>

                        <div class="h-2.5 w-2.5 bg-red-500 inline-block mr-2 rounded-sm"></div>
                        <small class="mr-6">Rebeixamento</small>
                    </div>
                </div>
                <Error v-else-if="s.hasError"/>
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