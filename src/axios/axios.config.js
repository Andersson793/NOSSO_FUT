import axios from "axios";
import { setupCache } from "axios-cache-interceptor";

const APIKey  = import.meta.env.VUE_APP_API_KEY || import.meta.env.VITE_API_KEY;

const Axios = setupCache(axios,{
    ttl: 10 * 60 * 1000
})

export const instance = Axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1',
    headers: {
        'Authorization': APIKey,
    }
})