<script setup>
import useGetAPI from '../axios.config.js';

//props
const props = defineProps({
  rodada: Number
})

//chamar API
const {isReady,hasError,data} = useGetAPI(`campeonatos/10/rodadas/${props.rodada}`,'Brasileirão')

if(isReady && hasError){
    console.warn('Não foi possível carregar este componente')
}
</script>
<template>
    <table class="hidden sm:block" v-if="isReady" id="rodada">
        <thead class="border-t-2 border-gray-200">
            <th class="h-14">{{data.rodada}}° RODADA</th>
        </thead>
        <tbody>
            <tr class="border-t-2 border-gray-200 text-center" v-for="item in data.partidas">
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