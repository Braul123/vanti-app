

/**
 * @description Proceso de inicio se sesión de un usuario
 * @returns 
*/

import { EncodeData } from "./utils/data-encoding";

interface credentials {
    email: string,
    password: string
}

export default function fetchLogin(data: credentials) {
    return new Promise(async (resolve, reject) => {
        const result = await geterateJWT(data);
        if (result) {
            resolve(result);
        } else {
            reject(result);
        }
    })
}

/**
 * @description Genera un token para seguridad y acceso de la aplicación
 * @param data 
 * @returns 
 */
async function geterateJWT(data: credentials) {
    try {
        const duration = Math.random() * 1000;
        const payload = {
            user: data.email,
            password: data.password,
            duration: Math.floor(duration)
        }
        // Codifica los datos
        const encodeToken = await EncodeData(JSON.stringify(payload));
        return encodeToken;
    } catch (error) {
        console.error('Ocurrio un error', error);
        return null
    }
}

/**
 * @description Cierra sesión
 */
export function logOutApp() {
    localStorage.clear();
}