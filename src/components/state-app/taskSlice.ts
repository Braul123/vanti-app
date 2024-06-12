
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: <any>[]
}

// Crea el state para administrar datos de usuario
export const dataTaskSlice = createSlice(
    {
        name: "dataTask",
        initialState,
        reducers: {
            setData: (state, actions) => {
                state.data = actions.payload;
            },
            deleteTask: (state, actions) => {
                console.log('PARA BORRAR');
                
                const { id } = actions.payload;
                const dataLocal: any = state.data;
                const indexTask = dataLocal.filter((item: any) => item.id !== id);
                state.data = indexTask;
            },
            addTask: (state, actions) => {
                const {completed, id, title, userId } = actions.payload;
                // Define la nueva tarea
                const newTask = {
                    completed,
                    id,
                    title,
                    userId
                } 
                state.data.unshift(newTask);
            },
            editTask: (state, actions) => {
                console.log('ENTRA A EDITAR LA TAREA');
                
                const {completed, id, title, userId } = actions.payload;
                const indexTask = state.data.findIndex((item: any) => item.id === id);
                const updateItem = {
                    completed,
                    id,
                    title,
                    userId
                };
                state.data[indexTask] = updateItem;
            }
        }
    },
)

export const { setData, deleteTask, addTask, editTask } = dataTaskSlice.actions;
export default dataTaskSlice.reducer;