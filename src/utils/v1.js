import axios from 'axios'
import getUrl from './getUrl'

const env = process.env.NODE_ENV

export const v1 = axios.create({
  baseURL: `http://192.168.10.3:3000/api/v1`
})
