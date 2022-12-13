<script setup>
import { defineProps } from "vue";

const props = defineProps({
    isOpen: Boolean
})

</script>
<template>
    <div v-if="isOpen" class="flex flex-col justify-center h-auto w-auto px-1 pt-1 bg-slate-100 drop-shadow-lg absolute right-2 rounded-md">
        <div class="inline-flex items-center justify-left cursor-pointer bg-gray-200 hover:bg-gray-300 hover:text-white rounded-md px-2 mb-1 py-1">
            <img class="h-8 w-auto mr-5" src="../assets/brasileiro-seriea.png">
            <span class="text-lg">Brasileirão</span>
        </div>
        <div class="inline-flex items-center justify-left cursor-pointer bg-gray-200 hover:bg-gray-300 hover:text-white rounded-md px-2 mb-1 py-1">
            <img class="h-8 w-auto mr-5" src="../assets/copa-do-brasil.png">
            <span class="text-lg">Copa do brasil</span>
        </div>
    </div>
</template>