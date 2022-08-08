<script>

export default {
  props: {
    Height: Number,
    Width: Number
  }
}

</script>
<template>
    <div :style="{width: Width+'px',height: Height+'px'}"></div>
</template>
<style scoped>
div{
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