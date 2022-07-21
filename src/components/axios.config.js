import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.api-futebol.com.br/v1/',
    headers: {
        'Authorization':'Bearer test_663571e967d0ad3de7f53890f6d87d',
    }
})

export default instance;