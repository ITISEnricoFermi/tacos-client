import axios from 'axios'
import getUrl from './getUrl'

const env = process.env.NODE_ENV

export const v1 = axios.create({
  baseURL: `http://192.168.43.35:3000/api/v1`
})
