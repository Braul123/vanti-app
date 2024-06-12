
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    useColorScheme: 'dark'
}

// Crea el state para administrar datos de usuario
export const colorSystemSlice = createSlice({
    name: "colorSystem",
    initialState,
    reducers: {
        changeAspect: (state, actions) => {
            state.useColorScheme = actions.payload;
            console.log('entra a cambiar', state.useColorScheme);
            
        },
    }
})

export const { changeAspect } = colorSystemSlice.actions;
export default colorSystemSlice.reducer;