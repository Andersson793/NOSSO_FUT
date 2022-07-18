<script setup>
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedInIcon, TwitterIcon } from 'share-button-links/components/icons';
</script>
<template>
    <footer>
        <div class="conteiner">
            <div class="conteiner-share">
                <p>Compartilhe esta página</p>
                <div>
                    <FacebookIcon/>
                    <WhatsappIcon/>
                    <TelegramIcon/>
                    <LinkedInIcon/>
                    <TwitterIcon/>
                </div>
            </div>
            <div>Ícones feitos por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/br/" title="Flaticon">www.flaticon.com</a></div>
        </div>
        <nav>
            <a href="">Sobre o site</a>
            <span>|</span>
            <a href="">Termos de uso</a>
            <span>|</span>
            <a href="">Código fonte</a>
            <span>|</span>
            <a href="">Contato</a>
        </nav>
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
    background-color: #12F706;
    padding-top: 20px;
}

footer .conteiner{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 35px;
    justify-content: space-around;
}

footer nav{
    margin-bottom: 20px;
}

footer nav span{
    margin: 0 15px;
}

footer .conteiner-licenca{
    margin-top: 20px;
}

footer .conteiner-share p{
    text-align: left;
    margin-bottom: 10px;
}

footer .conteiner-share div{
    display: inline-flex;
}
</style>