<script setup>
import TitleSections from './TitleSections.vue';
const td_style  = "px-5 py-2"
</script>
<template>
    <!--seção de apoiadores do site-->
    <TitleSections>
        Apoiadores
    </TitleSections>
    <div class="flex flex-col text-center">
        <table class="text-sm w-fit m-auto text-neutral-500">
            <tbody>
                <tr>
                    <td :class="td_style">Andersson S. Gonçalves</td>
                    <td :class="td_style">Sua logo aqui.</td>
                    <td :class="td_style">José Alexandre</td>
                </tr>
                <tr>
                    <td :class="td_style">Sua logo aqui.</td>
                    <td :class="td_style">Fernanda Gentile</td>
                    <td :class="td_style">Carlos josé</td>
                </tr>
                <tr>
                    <td :class="td_style">Elder Rocha</td>
                    <td :class="td_style">Felipe Castro</td>
                    <td :class="td_style">Wendell Gomes da Silva</td>
                </tr>
            </tbody>
        </table>
        <a class="text-sm mt-10" href="https://apoia.se/nosso_fut">Torne-se um apoiador.</a>
    </div>
</template>