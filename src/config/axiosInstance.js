/* eslint-disable func-names */
import axios from 'axios'
import { signOut } from '../store/auth/auth.thunk'
import { store } from '../store/store'
const BASE_URL = 'http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1'

const headers ={
    'Content-type': 'application/json',
     UserID: 'elina',
}

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers,
})

axiosInstance.interceptors.request.use(
    function (config) {
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: store.getState().auth.token,
            },
        }
        return newConfig
    },

    function (error) {
        return error
    }
)

axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.status === 401) {
            store.dispatch(signOut())
        }
        return error
    }
)