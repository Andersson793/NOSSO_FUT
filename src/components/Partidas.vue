<script setup>
import useGetAPI from './axios.config.js';
const {isReady,hasError,data} = useGetAPI('ao-vivo','Partidas')

</script>
<template>
    <span v-if="isReady">Partidas ao-vivo</span>
</template>
<style scoped>

</style>