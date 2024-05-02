import { useState } from "react";
import filmSort from "../utils/filmSort";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { clearFilms, setFilms } from "../store/filmsSlice";
import Button from "./Button";
import strChange from "../utils/strChange";

const SortRatingButton = () => {

    const _initialFilms = useAppSelector((state) => state.films._initialFilms);
    let [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const [sortRating, setSortRating] = useState<number|undefined>(undefined); // 0-unassigned, 1-asc, 2-desc
    const sortRatingLabels:string[]  = ["сортировать по рейтингу", "рейтинг по возрастанию", "рейтинг по убыванию"]

    const sortByRating = async() => {
        const tempRatingSort = searchParams.get("byRating");

        if(tempRatingSort === null || !/^[0-9]+$/.test(tempRatingSort)) {
            setSortRating(0);
            return;
        }
    
        switch (tempRatingSort) {
            case "1":
                await filmSort.byRating(_initialFilms, "asc")
                .then(result => dispatch(setFilms(result)))
                setSortRating(1)
                break;
            case "2":
                await filmSort.byRating(_initialFilms, "desc")
                .then(result => dispatch(setFilms(result)))
                setSortRating(2)
                break;
            default:
                dispatch(clearFilms())
                setSortRating(0)
        }
    }

    useEffect(() => {
        sortByRating();
    },[searchParams])

    const handleChangeParam = (param:string) => {
        let index = strChange(sortRating!, sortRatingLabels)

        setSearchParams((p)=> {return{...p, [param]: index}})
    }

    return(
        <Button onClick={()=>{handleChangeParam("byRating")}}>
            {sortRatingLabels[sortRating!]}
        </Button>
    )
}

export default SortRatingButton;