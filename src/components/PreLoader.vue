<script>
//define as propriedades de largura e altura
export default {
  props: {
    Height: String,
    Width: String
  }
}

</script>
<template>
    <div id="preloader" :style="{width: Width+'px', height: Height+'px'}"></div>
</template>
<style scoped>
#preloader{
    max-width: 95vw;
    border-radius: 5px;
    animation: loader 2s ease-in-out infinite;
}

@keyframes loader {
    from{
        background-color: #f1f1f1;
    }

    50%{
        background-color: #d6d6d6;
    }

    to{
        background-color: #f1f1f1;
    }
}
</style>