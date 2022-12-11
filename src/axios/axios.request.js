import { instance } from "./axios.config";
import { ref, watch } from "vue";

//função de requisição
export default function useGetAPI(url,component){

    const isReady = ref(false)
    const hasError = ref(false)
    const response = ref(null)

    try {
        instance.get(url).then((resp) => {
            response.value = resp.data
        })
    } catch (error) {
        hasError.value = true
        console.warn("Não foi possivel carregar a requisição para o componente"+ component)
        console.warn(error)
    }

    watch(response,() =>{
        isReady.value = true
    })

    return {isReady,hasError,response}
}