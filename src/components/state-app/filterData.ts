
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: [
        {
            id: 'all',
            name: 'Todos',
            value: 'all',
            select: true
        },
        {
            id: 'name',
            name: 'Nombre',
            value: 'name',
            select: false
        },
        {
            id: 'favorite',
            name: 'Favoritos',
            value: 'favorite',
            select: false
        },
        {
            id: 'complete',
            name: 'Completados',
            value: 'complete',
            select: false
        },
        {
            id: 'nocomplete',
            name: 'Sin completar',
            value: 'nocomplete',
            select: false
        },

    ]
}

// Crea el state para administrar datos de usuario
export const filterSlice = createSlice(
    {
        name: "filterData",
        initialState,
        reducers: {
            selectFilter: (state, actions) => {
                const { id } = actions.payload;
                // Almacena los filtros temporalmente
                let filters: any = state.filters;
                console.log('LLEGA HASTA ASIG ');
                
                // Define el nuevo filtro y lo guarda 
                const filtersNew = filters.map((item: any) => {
                    if (item.id === id) {
                        item.select = true;
                        return item;
                    } else {
                        item.select = false;
                        return item;
                    }
                });
                state.filters = filtersNew;
            },
        }
    },
)

export const { selectFilter } = filterSlice.actions;
export default filterSlice.reducer;