import axios from 'axios'

const api = axios.create({
    baseURL:"http://192.168.15.06:3333/api"
})

export default api