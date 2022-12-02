import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('campeonato',() =>{
  const nome = ref("copa do mundo de londres")
  const rodada  = ref(187)

  function alterarNome(params) {
    nome.value = params
  }

  function alterarRodada(params) {
    rodada.value = params
  }

  return { nome, rodada, alterarNome, alterarRodada }
})
