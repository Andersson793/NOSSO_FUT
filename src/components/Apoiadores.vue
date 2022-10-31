<script setup>
import TitleSections from './TitleSections.vue';
//**pendêndia
//utilizar a API do Apoia-se para pegar os nomes dos apoadores
</script>
<template>
    <!--seção de apoiadores do site-->
    <TitleSections>
        Apoiadores
    </TitleSections>
    <div class="conteiner text-center margin-bottom-90">
        <table style="margin-bottom: 50px;" class="item-center">
            <tbody>
                <tr>
                    <td>Andersson S. Gonçalves</td>
                    <td>Pedro Abael Juniro</td>
                    <td>José Alexandre</td>
                </tr>
                <tr>
                    <td>Renato Cardoso</td>
                    <td>Fernanda Gentile</td>
                    <td>Carlos josé</td>
                </tr>
                <tr>
                    <td>Elder Rocha</td>
                    <td>Felipe Castro</td>
                    <td>Wendell Gomes da Silva</td>
                </tr>
            </tbody>
        </table>
        <strong style="font-size: 0.8em;">Vocẽ tambem poder ser um apoiador ! <a href="https://apoia.se/nosso_fut">Apoia-se</a></strong>
    </div>
</template>
<style scoped>
td{
    color: gray;
    padding: 10px;
    text-align: center;
}
</style>