<script setup>
import TitleSections from '../TitleSections.vue';
import useGetAPI from '../../axios/axios.request.js';
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';

const {isReady,hasError,response} = useGetAPI('/campeonatos/10/artilharia','Artilharia')

</script>
<template>
    <section>
        <TitleSections>
            Ranking de Artilharia
        </TitleSections>
        <div class="flex justify-center">
            <table class="text-sm sm:text-base" v-if="isReady">
                <tbody>
                    <tr
                        v-for="(item,index) in response.slice(0,5)" 
                        class="hover:bg-gray-50 border-t-2 border-gray-200"
                    >
                        <td class="px-2">{{index+1}}°</td>
                        <td class="px-2">
                            <img class="h-9" :src="item.time.escudo">
                        </td>
                        <td class="py-2 pl-2 pr-10">
                            <div>
                                {{item.atleta.nome_popular}}
                            </div>
                            <small class="font-bold text-neutral-500">{{item.time.nome_popular}}</small>
                        </td>
                        <td class="px-2 font-bold">{{item.gols}}</td>
                        <td class="px-2">Gols</td>
                    </tr>
                </tbody>
            </table>
            <Error v-else-if="hasError"/>
            <PreLoader v-else :prop_width="310" :prop_height="250"/>
        </div>
    </section>
</template>