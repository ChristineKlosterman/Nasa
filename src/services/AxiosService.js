import Axios from 'axios'
import { baseURL } from '../env'


export const api = Axios.create({
  baseURL,
  timeout: 4000
})

export const nasaApi = Axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 8000,
  params: {
    api_key: '0TjbfDLMYo8DSSfTBpvc9ey9O4T4DScQpHl6md1x'
  }
})

