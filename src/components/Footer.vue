<script setup>
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedInIcon, TwitterIcon } from 'share-button-links/components/icons';
</script>
<template>
    <footer>
        <div class="conteiner-share">
            <p>Compartilhe esta página</p>
            <div>
                <FacebookIcon url=""/>
                <TelegramIcon/>
                <LinkedInIcon/>
                <WhatsappIcon/>
                <TwitterIcon/>
            </div>
        </div>
        <nav>
            <a href="">Termos de uso</a>
            <span>|</span>
            <a href="">Privaciade</a>
        </nav>
        <div>Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
        <div class="conteiner-licenca">
            <p>Site sob licença GLP 3.0</p>
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
    background-color: #23F918;
}

footer .conteiner-share{
    text-align: center;
    margin-bottom: 35px;
}

footer .conteiner-share div{
    display: inline-flex;
}

footer nav{
    margin-bottom: 35px;
}

footer nav span{
    margin: 0 10px;
}

footer .conteiner-licenca{
    margin: 10px 0;
}

footer .conteiner-share p{
    margin-bottom: 10px;
}
</style>