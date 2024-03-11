// import axios, { type AxiosResponse } from 'axios'
// import http from 'http'

// export type TRecord = Record<string, any>

// type TApiParams<T = any> = (
//   path: string,
//   param?: TRecord,
//   isMultiPart?: boolean
// ) => Promise<AxiosResponse<T>>

// const apiBaseRoutePath = 'api'

// const getApiBaseUrl = (): string => {
//   if (typeof window !== 'undefined') {
//     const { protocol, origin, hostname } = window.location
//     const url = origin.includes('localhost')
//       ? `${protocol}//${hostname}:5000/${apiBaseRoutePath}/`
//       : `${origin}/${apiBaseRoutePath}`
//     return url
//   }
//   return ''
// }

// const instance = axios.create({
//   baseURL: getApiBaseUrl(),
//   timeout: 2000,
//   responseType: 'json',
//   httpAgent: new http.Agent({ keepAlive: true }),
//   httpsAgent: new http.Agent({ keepAlive: true })
// })

// export const get: TApiParams = async (path, params): Promise<AxiosResponse> =>
//   (await instance.get(path, { params })).data

// export const post: TApiParams = async (
//   path,
//   payload = {},
//   isMultiPart = false
// ) => {
//   const { fileList = [], ...rest } = payload || {}
//   payload = isMultiPart ? createMultiFormData(rest, fileList) : payload
//   return (await instance.post(path, payload)).data
// }
// export const put: TApiParams = async (
//   path,
//   payload = {},
//   isMultiPart = false
// ) => {
//   const { fileList = [], ...rest } = payload || {}
//   payload = isMultiPart ? createMultiFormData(rest, fileList) : payload
//   return (await instance.put(path, payload)).data
// }

// export const createMultiFormData = (
//   obj: TRecord,
//   fileList: string[]
// ): FormData => {
//   const formData = new FormData()
//   const fileListSet = new Set(fileList)

//   for (const key in obj) {
//     const isObject = typeof obj[key] === 'object'
//     const isFile = fileListSet.has(key)
//     const isArray = Array.isArray(obj[key])

//     if (isFile && obj[key]) {
//       obj[key] = isArray ? obj[key] : [obj[key]]
//     } else if (isObject) {
//       if (isArray) {
//         for (const val of obj[key]) {
//           formData.append(`${key}[]`, val)
//         }
//       } else {
//         obj[key] && formData.append(key, JSON.stringify(obj[key]))
//       }
//     } else {
//       if (obj[key] && obj[key] !== 'null' && obj[key] !== 'undefined') {
//         formData.set(key, obj[key])
//       }
//     }
//   }
//   return formData
// }
