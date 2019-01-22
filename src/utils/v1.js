import axios from 'axios'
import getUrl from './getUrl'

const env = process.env.NODE_ENV

export const v1 = axios.create({
  baseURL: `${getUrl(env)}/api/v1`
})
