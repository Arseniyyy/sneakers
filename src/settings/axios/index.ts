import axios from 'axios'
import { baseURL } from 'settings/endpoints'

const instance = axios.create({
  baseURL: baseURL
})

export default instance
