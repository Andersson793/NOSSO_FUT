<script setup>
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedInIcon, TwitterIcon } from 'share-button-links/components/icons';
</script>
<template>
    <footer>
        <a href="https://github.com/Andersson793/NOSSO_FUT">
            <img src="../assets/logo_transparente.svg" alt="NOSSO FUT" height="30">
        </a>
        
        <div class="conteiner-share">
            <p>Compartilhe esta página</p>
            <div>
                <FacebookIcon url="https://nossofut.com/"/>
                <TelegramIcon url="https://nossofut.com/"/>
                <LinkedInIcon url="https://nossofut.com/"/>
                <WhatsappIcon messase="acompanhe a tabela e artilharia do campeonato brasileiro 2022" url="https://nossofut.com/"/>
                <TwitterIcon title="acompanhe a tabela e artilharia do campeonato brasileiro 2022" url="https://nossofut.com/"/>
            </div>
        </div>
        <span class="privacy">Coletamos alguns dados para o monitoramento de tráfego.</span>
        <div class="contact">
            <small>Por <a href="https://github.com/Andersson793">Andersson Gonçalves</a></small>
        </div>
        <div class="conteiner-licenca">
            <p>NOSSO FUT v-0.1.0</p>
        </div>
    </footer>
</template>
<style scoped>
footer{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 20px;
    background-color: #37F25F;
}

img{
    margin-bottom: 20px;
}

.contact{
    margin-bottom: 15px;
}

.privacy{
    margin-bottom: 30px;
}

.conteiner-share{
    text-align: center;
    margin-bottom: 30px;
}

.conteiner-share div{
    display: inline-flex;
}


footer .conteiner-licenca{
    background-color: #0000001c;
    padding: 8px 0;
}

footer .conteiner-share p{
    margin-bottom: 10px;
}
</style>