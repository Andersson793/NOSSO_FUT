<script setup>
import Section from './Section.vue';
import TitleSections from './TitleSections.vue';
</script>
<template>
    <Section>
        <TitleSections>
            Ranking de Artilharia
        </TitleSections>
        <table>
            <tbody>
                <tr>
                    <td>1°</td>
                    <td><img src="../assets/palmeiras-escudo-5.png" height="30"></td>
                    <td>Gabrial Barbosa</td>
                    <td>28 Gols</td>
                </tr>
                <tr>
                    <td>2°</td>
                    <td><img src="../assets/palmeiras-escudo-5.png" height="30"></td>
                    <td>Hulk</td>
                    <td>28 Gols</td>
                </tr>
                <tr>
                    <td>3°</td>
                    <td><img src="../assets/palmeiras-escudo-5.png" height="30"></td>
                    <td>Gabrial Barbosa</td>
                    <td>21 Gols</td>
                </tr>
            </tbody>
        </table>
    </Section>
</template>
<style scoped>
table{
    border-collapse:collapse;
    width: fit-content;
}


table tr{
    border-top: 2px solid #DFDEDE;
}

tr{
    cursor: pointer;
}

tbody > tr:hover{
    background-color: #f3f3f3;
}

th,td{
    text-align: center;
    padding: 8px 15px;
}

td:nth-child(1),
td:nth-child(2){
    padding-right: 0;
}

td:nth-child(3){
    padding-right: 40px;
    text-align: left;
}
</style>