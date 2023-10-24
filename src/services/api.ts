import axios from 'axios'

const baseURL = 'https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/'

export const api = axios.create({ baseURL })

