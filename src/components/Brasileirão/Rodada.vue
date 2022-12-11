<script setup>
import useGetAPI from '../../axios/axios.request.js';
import { useStore } from "@/stores/campeonato.js";
import { storeToRefs } from 'pinia';

const store  = useStore()
const {rodada} = storeToRefs(store)

const {isReady,hasError,response} = useGetAPI(`https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/${rodada}`,'Partidas')

</script>
<template>
    <table class="hidden sm:block" v-if="isReady" id="rodada">
        <thead class="border-t-2 border-gray-200">
            <th class="h-14">{{rodada}}° RODADA</th>
        </thead>
        <tbody>
            <tr v-for="item in response.partidas" class="border-t-2 border-gray-200 text-center">
                <td>
                    <small>
                        {{item.estadio.nome_popular}} - {{item.data_realizacao}} às {{item.hora_realizacao}}
                    </small>
                    <div class="flex justify-center items-center my-2">
                        <img
                            class="h-10"
                            :title="item.time_mandante.nome_popular"
                            :src="item.time_mandante.escudo"
                            :alt="item.time_mandante.nome_popular"
                        >
                        <div class="font-bold mx-3 text-2xl">
                            <span>{{item.placar_mandante}}</span>
                            <span class="mx-1">-</span>
                            <span>{{item.placar_visitante}}</span>
                        </div>
                        <img
                            class="h-10"
                            :title="item.time_visitante.nome_popular"
                            :src="item.time_visitante.escudo"
                            :alt="item.time_visitante.nome_popular"
                        >
                    </div>
                    <small class="font-bold uppercase">{{item.status}}</small>
                </td>
            </tr>
        </tbody>
    </table>
</template>