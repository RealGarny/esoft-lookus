import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import filmsAPI from "../data/filmsAPI.json";

export interface films {
    _initialFilms: any[],
    films: any[]
    loading: boolean,
    error: boolean
}

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async function() {
        //В будующем можно реализовать через API запрос
        // const response = await fetch(api_url);
        // const data = response.json();
        // return data;
        return filmsAPI;
    }
)

const initialState: films = {
    _initialFilms: [],
    films: [],
    loading: false,
    error: false
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        clearFilters(state) {
            state.films = state._initialFilms;
        },
        filterByRating(state, action) {
            if(action.payload === "asc") {
                //do filter by asc
            }
            if(action.payload === "desc") {
                //do filter by desc
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFilms.pending, (state) => {
            state.loading = true;
            state.error = false;
        })
        builder.addCase(fetchFilms.fulfilled, (state, action) => {
            state.loading = false;
            state.error = false;
            state._initialFilms = action.payload;
            state.films = state._initialFilms;
        })
        builder.addCase(fetchFilms.rejected, (state) => {
            state.loading = false;
            state.error = true;
        })
    }
})

export const { clearFilters, filterByRating } = filmsSlice.actions;
export default filmsSlice.reducer;