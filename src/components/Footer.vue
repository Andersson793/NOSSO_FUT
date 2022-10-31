<script setup>
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedInIcon, TwitterIcon } from 'share-button-links/components/icons';
</script>
<template>
    <footer>
        <div class="conteiner flex-space-between align-center">
            <a href="https://nossofut.com/">
                <img src="../assets/logo_transparente.svg" alt="NOSSO FUT" height="32">
            </a>
            <div>
                <p>Compartilhe esta página</p>
                <div class="inline-flex margin-top-10">
                    <FacebookIcon url="https://nossofut.com/"/>
                    <TelegramIcon url="https://nossofut.com/"/>
                    <LinkedInIcon url="https://nossofut.com/"/>
                    <WhatsappIcon messase="acompanhe a tabela do campeonato brasileiro 2022" url="https://nossofut.com/"/>
                    <TwitterIcon title="acompanhe a tabela do campeonato brasileiro 2022" url="https://nossofut.com/"/>
                </div>
            </div>
        </div>
        <div class="conteiner">
            <strong style="font-size: 0.8em;">Não utilzamos cookies.</strong>
        </div> 
        <div id="conteiner-licenca" class="conteiner flex-items-center align-center">
            <span>NOSSO FUT Versão-0.1.0 - beta</span>
            <img src="../assets/balanca-de-justica.png">
            <span>GPL-3.0</span>
            <img src="../assets/github.png" height="23" alt="">
            <i title="Github"></i>
            <span>Open Source</span>
        </div>
    </footer>
</template>
<style scoped>
footer{
    background-color: #37F25F;
}

#conteiner-licenca{
    background-color: #0000001c;
}

#conteiner-licenca span{
    margin-right: 30px;
    cursor: pointer;
    font-size: 0.9em;
}

#conteiner-licenca img{
    margin-right: 12px;
}
</style>