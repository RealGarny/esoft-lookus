import { configureStore } from "@reduxjs/toolkit";
import films from "./filmsSlice";

export const store = configureStore({
    reducer: {
        films,
    }
})