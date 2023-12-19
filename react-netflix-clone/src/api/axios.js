import axios from "axios"

const instance = axios.create({
    baseURL: 'http://api.themoviedb.org/3',
    params: {
        api_key: '3def14819e849b1546485a7c79b9931e',
        language: 'ko-KR',
    }
})

export default instance