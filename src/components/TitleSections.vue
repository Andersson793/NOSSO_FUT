<template>
    <div class="title-section">
        <div>
            <h3>
                <slot/>
            </h3>
        </div>
    </div>
</template>
<style scoped>
.title-section{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

h3{
    font-size: 1.5em;
}
</style>