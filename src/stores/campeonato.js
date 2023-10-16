import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('campeonato',() => {
  
  const nome = ref(" ");
  const rodada  = ref(1);
  const camp_model = ref(10);

  function alterarNome(param) {
    nome.value = param
  }

  function alterarRodada(param) {
    rodada.value = param
  }

  function alterarCamp(param) {
    camp_model.value = Number(param)
  }

  return { nome, rodada, camp_model, alterarNome, alterarCamp}
})
