import { filmsData } from "../store/filmsSlice";

class Filter {
    async byGenres(parameter:filmsData|string, toFilter:filmsData[]):Promise<filmsData[]> {

        if(!Array.isArray(toFilter) || toFilter.length < 1) {
            console.error("Filter/simmilarGenres: unexpected second argument.")
            return toFilter;
        }

        let temp:filmsData[] = [];

        switch (typeof(parameter)) {
            case "string":
                toFilter.map((film) => {
                    for(let i = 0; i < film.genres.length; i++) {
                        if(film.genres[i].name === parameter) temp.push(film);
                    }
                })
                return temp;
            case "object":
                if(Object.keys(parameter).length < 1) {
                    console.error("Filter/simmilarGenres: first argument is empty.")
                    return toFilter;
                }
                toFilter.map((film) => {
                    let abort:boolean = false;
                    for(let i = 0; i < parameter.genres.length && !abort; i++) {// Checks if at least one genres tag is simmilar in two given films
                        for(let j = 0; j < film.genres.length && !abort; j++) {
                            if(parameter.id !== film.id && parameter.genres[i].name === film.genres[j].name) {
                                temp.push(film);
                                abort = true;
                            }
                        }
                    }
                })
                return temp;
            default:
                console.error("Filter/simmilarGenres: unexpected type provided.");
                return toFilter;
        }
    }

    async byName(name:string, toFilter:filmsData[]):Promise<filmsData[]> {
        if(!name && !toFilter) {
            console.error("Filter/byName: unexpected input")
            return toFilter;
        }
        return toFilter.filter((film) => film.name === name);
    }
}

export default new Filter();