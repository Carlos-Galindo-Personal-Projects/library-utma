import axios from "axios"
import https from "https"

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 3000,
    withCredentials: true,
    httpsAgent: new https.Agent({
        rejectUnauthorized: false
    })
})

export default axiosInstance
