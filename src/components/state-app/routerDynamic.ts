/**
 * @description Esta configuración administra el navegador desde componentes que no pertenezcan al Router principal
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    action: '/'
}

// Crea el state para administrar datos de usuario
export const routerDynamicSlice = createSlice(
    {
        name: "routerDynamic",
        initialState,
        reducers: {
            changeRouterExternal: (state, actions) => {
                state.action = actions.payload;

            },
        }
    },
)

export const { changeRouterExternal } = routerDynamicSlice.actions;
export default routerDynamicSlice.reducer;