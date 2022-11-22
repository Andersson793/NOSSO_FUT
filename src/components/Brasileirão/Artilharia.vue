<script setup>
import TitleSections from '../TitleSections.vue';
import useGetAPI from '../axios.config.js';
import Error from '../Error.vue';
import PreLoader from '../PreLoader.vue';

const {isReady,hasError,data} = useGetAPI('/campeonatos/10/artilharia','Artilharia')

const td_style = "px-2 py-2";
</script>
<template>
    <section>
        <TitleSections>
            Ranking de Artilharia
        </TitleSections>
        <div class="flex justify-center">
            <table v-if="isReady">
                <tbody>
                    <tr class="hover:bg-neutral-100 border-t-2 border-gray-200" v-for="(item,index) in data.slice(0,5)">
                        <td :class="td_style">{{index+1}}°</td>
                        <td :class="td_style">
                            <img class="h-10" :src="item.time.escudo">
                        </td>
                        <td class="py-2 pr-10">
                            <div>
                                {{item.atleta.nome_popular}}
                            </div>
                            <small class="font-bold text-neutral-500">{{item.time.nome_popular}}</small>
                        </td>
                        <td class="font-bold" :class="td_style">{{item.gols}}</td>
                        <td :class="td_style">Gols</td>
                    </tr>
                </tbody>
            </table>
            <Error v-else-if="hasError"/>
            <PreLoader v-else prop_width="310" prop_height="250"/>
        </div>
    </section>
</template>