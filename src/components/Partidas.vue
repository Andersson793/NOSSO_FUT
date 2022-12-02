<script setup>
import useGetAPI from './axios.config.js';
import PreLoader from './PreLoader.vue';
const {isReady,hasError,data} = useGetAPI('ao-vivo','Partidas')

if(hasError){
    console.warn("Não foi possível carregar o componente Partidas")
}
</script>
<template>
    <div class="pl-1 mt-2 mb-28">
        <div class="rounded-sm mb-1 py-1 px-2 text-xs font-bold bg-gray-100 w-fit text-center">
            Partidas ao-vivo - Todos os campeonatos
        </div>
        <div v-if="isReady" class="inline-flex w-full overflow-scroll">
            <div
                v-for="item in data" 
                class="w-44 text-center truncate px-2 bg-gray-100 rounded-sm mr-1 mb-1"
                style="min-width:170px"
            >
                <small class="font-bold">{{item.campeonato.nome}}</small>
                <div class="flex items-center justify-center my-2">
                    <img
                        class="h-7"
                        :alt="item.time_mandante.nome_popular"
                        :src="item.time_mandante.escudo"
                        :title="item.time_mandante.nome_popular"
                    >
                    <div class="text-xl font-bold mx-2">
                        <span>{{item.placar_mandante}}</span>
                        <span class="mx-2">-</span>
                        <span>{{item.placar_visitante}}</span>
                    </div>
                    <img
                        class="h-7"
                        :alt="item.time_visitante.nome_popular"
                        :src="item.time_visitante.escudo"
                        :title="item.time_visitante.nome_popular"
                    >
                </div>
            </div>
        </div>
        <div v-else class="inline-flex w-full overflow-scroll">
            <PreLoader class="mr-1" :prop_width="176" :prop_height="73"/>
            <PreLoader :prop_width="176" :prop_height="73"/>
        </div>
    </div>
</template>