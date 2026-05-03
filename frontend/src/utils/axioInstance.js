import axios from "axios"

// Use relative URLs - Vercel will proxy /api requests to Railway
const BASE_URL = ""

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
})

export default axiosInstance
