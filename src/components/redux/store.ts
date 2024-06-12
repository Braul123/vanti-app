
import { configureStore } from '@reduxjs/toolkit';
import colorSystemSlice from './colorSystemSlice';

export const store = configureStore({
    reducer: {
        colorSystem: colorSystemSlice
    },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;