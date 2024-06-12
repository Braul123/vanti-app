

/**
 * @description Obtiene el nombre de usuario
 */
export async function getUser() {
    const user = localStorage.getItem('userName');
    return user ? user : null;
}

/**
 * @description Obtiene el token de la sesión
 */
export async function getAcessToken() {
    const token = await localStorage.getItem('token');
    return token ? token : null;
}