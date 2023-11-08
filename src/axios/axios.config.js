import axios from "axios";
import { buildStorage, setupCache } from "axios-cache-interceptor";

const APIKey  = import.meta.env.API_KEY || import.meta.env.VITE_API_KEY;

const AxiosC = setupCache(axios,{
    ttl: 10 * 60 * 1000
})

export const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1',
    headers: {
        'Authorization': APIKey,
    }
})