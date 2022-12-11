import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('campeonato',() =>{
  const nome = ref("campeonato brasileiro")
  const rodada  = ref(1)

  function alterarNome(param) {
    nome.value = param
  }

  function alterarRodada(param) {
    rodada.value = param
  }

  return { nome, rodada, alterarNome, alterarRodada}
})
