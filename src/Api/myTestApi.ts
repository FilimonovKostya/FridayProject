import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/'
})


export const getTimeAPI = (time: string) => {
    return instance.get(`ping?frontTime=${time}`)
}