import { configureStore } from "@reduxjs/toolkit";
import films from "./filmsSlice";

export const store = configureStore({
    reducer: {
        films,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;