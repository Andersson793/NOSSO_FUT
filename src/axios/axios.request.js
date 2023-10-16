import { instance } from "./axios.config";
import { ref } from "vue";

export default function useGetAPI(url)
{

    //ref
    const dif = ref({
        isReady: false,
        data: undefined,
        camp_id: undefined,
        hasError: false
    })

    instance.get(url).then((resp) => 
    {

        dif.value.isReady = true
        dif.value.data = resp.data
        dif.value.camp_id = resp.data.campeonato_id

    }).catch(() => 
    {
        dif.value.hasError = true
    })

    /*

    //Define um cache de sessão no navegador
    function defineStorage(i)
    {
        const n = JSON.stringify(i)

        sessionStorage.setItem('local-cache', n)
    }

    //recebe o cache de sessão do navegador
    function getStorage()
    {
        const b = JSON.parse(sessionStorage.getItem('local-cache'))

        return b
    }

    //verifica se há algum dado de sessão armazenado no navegar
    //se não faz uma requisição para a API definindo os dados de sessão
    if (sessionStorage.getItem('local-cache'))
    {
        dif.value.isReady = true;
        dif.value.data = getStorage()
    }else
    {
        instance.get(url).then((resp) => 
        {
            defineStorage(resp.data.response)

            dif.value.isReady = true
            dif.value.data = resp.data.response
            
        }).catch(() => 
        {
            dif.value.hasError = true
        })

        
    }

    */

    return dif;

}