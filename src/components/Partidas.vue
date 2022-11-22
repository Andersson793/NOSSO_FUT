<script setup>
import useGetAPI from './axios.config.js';
const {isReady,hasError,data} = useGetAPI('ao-vivo','Partidas')

</script>
<template>
    <div class="pl-1 mt-5">
        <div class="bg-blue-400 rounded-sm mb-1 w-14 text-center py-1 text-xs">
            ao-vivo
        </div>
        <div class="flex align-middle">
            <div class="text-center px-2 w-48 truncate bg-green-500 rounded-sm mr-1 mb-1" v-for="item in data">
                <small class="font-bold">{{item.campeonato.nome}}</small>
                <div class="flex align-middle justify-center my-2">
                    <img
                        class="h-8"
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
                        class="h-8"
                        :alt="item.time_visitante.nome_popular"
                        :src="item.time_visitante.escudo"
                        :title="item.time_visitante.nome_popular"
                    >
                </div>
            </div>
        </div>
    </div>
</template>