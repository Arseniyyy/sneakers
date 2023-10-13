import axios from 'axios'
import { baseURL } from 'settings'

const instance = axios.create({
  baseURL: baseURL
})

export default instance
