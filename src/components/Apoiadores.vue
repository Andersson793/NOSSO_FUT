<script setup>
import TitleSections from './TitleSections.vue';
</script>
<template>
    <!--seção de apoiadores do site-->
    <TitleSections>
        Apoiadores
    </TitleSections>
    <div class="flex flex-col text-center">
        <table class="text-sm w-fit m-auto text-neutral-500 mb-12">
            <tbody>
                <tr>
                    <td class="cursor-pointer px-5 py-2">Seu nome aqui.</td>
                </tr>
            </tbody>
        </table>
        <small>
            você tambem pode se tornar um apoiador.
        </small>
        <a class="m-auto text-orange-600 mt-5" href="https://apoia.se/nosso_fut">
            <img class="h-6" src="../assets/apoia-se.png" alt="apoia-se">
        </a> 
    </div>
</template>