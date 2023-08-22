import axios from "axios";

const APIKey  = import.meta.env.API_KEY || import.meta.env.VITE_API_KEY;

export const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1',
    headers: {
        'Authorization': APIKey,
    }
})