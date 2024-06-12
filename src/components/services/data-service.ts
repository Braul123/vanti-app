

import axios from 'axios';

const _API = process.env.REACT_APP_API;

export const axiosInstance = axios.create();


/**
 * @description Obtiene las tareas existentes
 */
export function fetchGetTask() {
    return new Promise((resolve, reject) =>{
        axiosInstance.get(`${_API}todos`).then((result: any) => {
            resolve(result.data);
        }).catch((error: any) => {
            reject(error)
        })
    })
}
