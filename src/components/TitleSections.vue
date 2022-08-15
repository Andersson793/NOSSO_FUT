<template>
    <!--este componente define um título de seção-->
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
    margin-top: 60px;
    margin-bottom: 50px;
}

h3{
    font-size: 1.5em;
}
</style>