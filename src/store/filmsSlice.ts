import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import filmsAPI from "../data/filmsAPI.json";

export interface filmComment {
    id: string|number,
    comments: [string]
}

export interface filmRatings {
    kp:number,
    imdb:number,
    filmCritics:number,
    russianFilmCritics:number
}

export interface posterUrls {
    url:string,
    previewUrl:string
}

export interface genre {
    name:string
}

export interface person {
    id:number,
    photo:string,
    name:string,
    enName:string,
    description:string,
    profession:string,
    enProfession:string
}

export interface filmsData {
    id:number,
    name:string,
    year:number,
    description:string,
    shortDescription:string,
    slogan:string,
    rating: filmRatings,
    movieLength:number,
    ageRating:number,
    poster: posterUrls,
    genres: genre[],
    persons: person[]
}

export interface films {
    _initialFilms: filmsData[],
    films: filmsData[] | [],
    favoriteFilms: [string | number] | [],
    watchLaterFilms: [string | number]| [],
    filmComments: filmComment[] | [],
    selectedFilm: filmsData,
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
    filmComments: [],
    loading: false,
    error: false
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        clearFilms(state) {
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
        },
        setFilmComments(state, action) {
            if(typeof(action.payload))  {
                state.filmComments = [...state.filmComments, action.payload];
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
    setFilms,
    getFilm,
    setFavoriteFilms,
    setWatchLaterFilms,
    clearFilms,
    setFilmComments
} = filmsSlice.actions;
export default filmsSlice.reducer;