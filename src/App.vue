<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Main from './components/Main.vue';
import Apoiadores from './components/Apoiadores.vue';
</script>

<template>
  <Header/>
  <Main/>
  <Apoiadores/>
  <Footer/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: Montserrat;
}

img{
  width: auto;
}

h1{
  font-size: 2.8em;
  color: #0ac500;
}

/* classes globais */

.conteiner{
  padding: 8px 15px;
  max-width: 100vw;
}

.fit-content{
  width: fit-content;
}

.text-center{
  text-align: center;
}

.text-left{
  text-align: left;
}

.text-right{
  text-align: right;
}

.text-gray{
  color: rgb(122, 122, 122);
}

.item-center{
  margin: 0 auto;
}

.flex{
  display: flex;
}

.inline-flex{
  display: inline-flex;
}

.flex-space-between{
  display: flex;
  justify-content: space-between;
}

.flex-space-around{
  display: flex;
  justify-content: space-around;
}

.flex-space-center{
  display: flex;
  justify-content: center;
}

/* remover */

.flex-items-center{
  display: flex;
  justify-content: center;
}

.flex-direction-column{
  flex-direction: column;
}

.align-center{
  align-items: center;
}

.paddind-10-20{
  padding: 10px 20px;
}

.margin-0-10{
  margin: 0 10px
}

.margin-0-5{
  margin: 0 5px;
}

.margin-bottom-10{
  margin-bottom: 10px;
}

.margin-bottom-90{
  margin-bottom: 90px;
}

.margin-top-10{
  margin-top: 10px;
}

.margin-top-90{
  margin-top: 90px;
}

.scroll{
  overflow-x: auto;
}

.bold{
  font-weight: bold;
}

.border-style-top{
  border-top: 1px solid #DFDEDE;
}

.border-style-bottom{
  border-bottom: 1px solid #DFDEDE;
}

.border-style-left{
  border-left: 1px solid #DFDEDE;
}

.border-style-right{
  border-right: 1px solid #DFDEDE;
}

/* media queries */

@media screen and (max-width: 720px){
  .hidden-on-small-device{
    display: none;
  }
}

/* font */
@font-face {
  font-family: Montserrat;
  font-display: swap;
  src:  local("Montserrat-Regular"),
        url('./Montserrat-Regular.ttf');
}
</style>
