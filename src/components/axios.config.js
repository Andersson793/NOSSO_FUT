import axios from "axios";
import {ref} from 'vue'

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        'Authorization':'Bearer test_663571e967d0ad3de7f53890f6d87d',
    }
})

export default function useGetAPI(url){

    const isReady = ref(false)
    const hasError = ref(false)
    const data = ref(null)

    instance.get(url).then((response) =>{
        data.value = response.data;
        isReady.value = true;
    }).catch(() => {
        hasError.valeu = true;
    })

    return {isReady,hasError,data}
}