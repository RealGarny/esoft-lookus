import { filmsData } from "../store/filmsSlice";

class Filter {
    byGenres(fFirst:filmsData|string, fSecond:filmsData):boolean {

        if(typeof(fSecond) !== "object" || Object.keys(fSecond).length < 1) {
            console.error("Filter/simmilarGenres: unexpected second argument.")
            return false;
        }

        switch (typeof(fFirst)) {
            case "string":
                for(let i = 0; i < fSecond.genres.length; i++) {
                    if(fSecond.genres[i].name === fFirst) return true;
                }
                return false;
            case "object":
                if(Object.keys(fFirst).length < 1) {
                    console.error("Filter/simmilarGenres: first argument is empty.")
                    return false;
                }
                // Checks if at least one genres tag is simmilar in two given films
                for(let i = 0; i < fFirst.genres.length; i++) {
                    for(let j = 0; j < fSecond.genres.length; j++) {
                        if(fFirst.id !== fSecond.id && fFirst.genres[i].name === fSecond.genres[j].name) {
                            return true;
                        }
                    }
                }
                return false;
            default:
                console.error("Filter/simmilarGenres: unexpected type provided.");
                return false;
        }
    }
}

export default new Filter();