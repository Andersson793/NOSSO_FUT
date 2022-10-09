<script setup>
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedInIcon, TwitterIcon } from 'share-button-links/components/icons';
</script>
<template>
    <footer>
        <div id="conteiner-footer">
            <a class="logo" href="https://nossofut.com/">
                <img src="../assets/logo_transparente.svg" alt="NOSSO FUT" height="35">
            </a>
            <div class="conteiner-share">
                <p>Compartilhe esta página</p>
                <div>
                    <FacebookIcon url="https://nossofut.com/"/>
                    <TelegramIcon url="https://nossofut.com/"/>
                    <LinkedInIcon url="https://nossofut.com/"/>
                    <WhatsappIcon messase="acompanhe a tabela do campeonato brasileiro 2022" url="https://nossofut.com/"/>
                    <TwitterIcon title="acompanhe a tabela do campeonato brasileiro 2022" url="https://nossofut.com/"/>
                </div>
            </div>
        </div>
        <small>Coletamos alguns dados para monitoramento de tráfego.</small>
        <div class="conteiner-licenca">
            <span>NOSSO FUT Versão-0.1.0</span>
            <span title="GNU General Public License v3.0">
                <img src="../assets/balanca-de-justica.png">
                GPL-3.0
            </span>
            <i title="Github"></i>
        </div>
    </footer>
</template>
<style scoped>
footer{
    background-color: #37F25F;
}

#conteiner-footer{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 20px 20px 10px;
}

.logo{
    margin-bottom: 20px;
}

.conteiner-share{
    margin-bottom: 30px;
}

.conteiner-share div{
    display: inline-flex;
}

footer > small{
    margin-left: 20px;
}


footer .conteiner-licenca{
    margin-top: 10px;
    text-align: center;
    background-color: #0000001c;
    padding: 8px 0;
}

.conteiner-licenca span{
    margin-right: 30px;
    cursor: pointer;
    font-size: 0.9em;
}

.conteiner-licenca img{
    margin-right: 5px;
}

footer .conteiner-share p{
    margin-bottom: 10px;
}
</style>