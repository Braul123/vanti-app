
import { configureStore } from '@reduxjs/toolkit';
import colorSystemSlice from './colorSystemSlice';
import routerDynamicSlice from './routerDynamic';

export const store = configureStore({
    reducer: {
        colorSystem: colorSystemSlice,
        routerDynamic : routerDynamicSlice
    },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;