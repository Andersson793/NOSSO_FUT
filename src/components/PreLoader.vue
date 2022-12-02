<script setup>
import { defineProps } from 'vue';
//define as propriedades de largura e altura
const props = defineProps({
  prop_height: Number,
  prop_width: Number
})
</script>
<template>
    <div 
      class="bg-gray-200 animate-pulse rounded-md max-w-full"  
      :style="{
        width: prop_width+'px',
        height: prop_height+'px'
      }"
    >
    </div>
</template>