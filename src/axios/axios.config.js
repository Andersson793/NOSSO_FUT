import axios from "axios";

const APIKey  = import.meta.env.API_KEY || 'Bearer test_663571e967d0ad3de7f53890f6d87d';

export const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1',
    headers: {
        'Authorization': APIKey,
    }
})