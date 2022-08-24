import axios from "axios";
import {ref} from 'vue'

//configuração e requisição

var APIKey = 'Bearer test_663571e967d0ad3de7f53890f6d87d'

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1',
    headers: {
        'Authorization': APIKey,
    }
})

export default function useGetAPI(url){

    const isReady = ref(false)
    const hasError = ref(false)
    const data = ref(null)

    instance.get(url).then((response) =>{
        data.value = response.data;
        isReady.value = true;
    }).catch((err) => {
        hasError.value = true;
        console.log(err.request.response)
    })

    return {isReady,hasError,data}
}