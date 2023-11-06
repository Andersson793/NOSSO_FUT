<script setup>
import { storeToRefs } from 'pinia';
import { useStore } from "@/stores/campeonato.js";

const props = defineProps({
    isOpen: Boolean
});

const store  = useStore();

const {alterarNome, alterarCamp } = store;

const { nome, camp_model, rodada } = storeToRefs(store);

</script>
<template>
    <div v-if="isOpen" class="flex flex-col justify-center h-auto w-auto px-1 pt-1 bg-slate-100 drop-shadow-lg absolute right-2">
        <!--
            <div class="inline-flex items-center justify-left cursor-pointer bg-gray-200 hover:bg-gray-300 px-2 mb-1 py-1 rounded-md">
                <p>Copa do Brasil</p>
            </div>
            <div class="inline-flex items-center justify-left cursor-pointer bg-gray-200 hover:bg-gray-300  px-2 mb-1 py-1 rounded-md">
                <p>Libertadores</p>
            </div>
        -->
        <div :onclick="(e) => alterarCamp(10)" class="inline-flex items-center justify-left cursor-pointer bg-gray-200 hover:bg-gray-300  px-4 mb-1 py-1 rounded-md">
            <p>Série A</p>
        </div>

        <div :onclick="(e) => alterarCamp(14)" class="hidden inline-flex items-center justify-left cursor-pointer bg-gray-200 hover:bg-gray-300  px-4 mb-1 py-1 rounded-md">
            <p>Série B</p>
        </div>

    </div>
</template>