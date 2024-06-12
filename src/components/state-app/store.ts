
import { configureStore } from '@reduxjs/toolkit';
import colorSystemSlice from './colorSystemSlice';
import routerDynamicSlice from './routerDynamic';
import filterSlice from './filterData';
import dataTaskSlice from './taskSlice';

export const store = configureStore({
    reducer: {
        colorSystem: colorSystemSlice,
        routerDynamic : routerDynamicSlice,
        filterData: filterSlice,
        dataTask: dataTaskSlice,
    },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;