import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import filmsAPI from "../data/filmsAPI.json";

export interface films {
    _initialFilms: any[],
    films: any[],
    favoriteFilms: [string | number] | [],
    watchLaterFilms: [string | number] | [],
    selectedFilm: Object,
    loading: boolean,
    error: boolean
}

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async function() {
        //В будующем можно реализовать через API запрос
        // const response = await fetch(api_url);
        // const data = await response.json();
        // return data;
        return filmsAPI;
    }
)

const initialState: films = {
    _initialFilms: [],
    films: [],
    selectedFilm: {},
    favoriteFilms: [],
    watchLaterFilms: [],
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
        setFilms(state, action) {
            state.films = action.payload;
        },
        getFilm(state, action) {
            state.selectedFilm = action.payload; //make async in the future
        },
        setFavoriteFilms(state, action) {
            if(typeof(action.payload))  {
                state.favoriteFilms = action.payload;
            }
        },
        setWatchLaterFilms(state, action) {
            if(typeof(action.payload))  {
                state.watchLaterFilms = action.payload;
            }
        }
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

export const { 
    clearFilters,
    filterByRating,
    getFilm,
    setFavoriteFilms,
    setWatchLaterFilms
} = filmsSlice.actions;
export default filmsSlice.reducer;