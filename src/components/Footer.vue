<script setup>
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedInIcon, TwitterIcon } from 'share-button-links/components/icons';
</script>
<template>
    <footer class="bg-green-400">
        <div class="text-center pt-4 pb-2 px-3">
            <div class="mb-10 flex justify-center">
                <a href="https://nossofut.com/">
                    <img class="h-10" src="../assets/logo_transparente.svg" alt="NOSSO FUT">
                </a>
            </div>
            <strong class="text-sm">Não utilzamos cookies.</strong>
        </div>
        <div class="flex justify-center item-center py-2 bg-green-500 text-sm">
            <span class="mr-5">NOSSO FUT Versão-0.1.0 - beta</span>
            <img class="h-6 mr-2" src="../assets/balanca-de-justica.png">
            <span class="mr-5">GPL-3.0</span>
            <img class="h-6 mr-2" src="../assets/github.png" height="23">
            <span>Open Source</span>
        </div>
    </footer>
</template>