import Flexbox from "./Flexbox"
import CommentItem from "./CommentItem"
import Text from "./Text"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { addFilmComment } from "../store/filmsSlice"
import { useState } from "react"

interface pCommentSection {
    readonly parentId: number, //comments for what page should be displayed
    header?: string,
}

const CommentSection:React.FC<pCommentSection> = (props) => {

    const [comment, setComment] = useState<string>("");
    
    const filmComments = useAppSelector(state => state.films.filmComments);
    const dispatch = useAppDispatch();
    const pageComments = filmComments.find(film => film.filmId === props.parentId);

    localStorage.setItem("filmComments", JSON.stringify(filmComments));

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value)
    }

    const handleSubmit = (e:React.KeyboardEvent) => {
        if(e.key === "Enter") {
            e.preventDefault();
            dispatch(addFilmComment({
                filmId:props.parentId,
                comments:[
                    {
                        id: pageComments ? pageComments.comments.length : 0,
                        date: Date(),
                        body: comment,
                        creator: "Anonymous"
                    }
                ]
            }))
            setComment("");
        }
    }

    return(
        <>
            <Flexbox className="flex-col">
                {
                    !pageComments 
                        ? <Text>Нет комметариев</Text>
                        : pageComments.comments.map((comment):React.ReactNode => {
                            return(
                                <CommentItem key={comment.id} creator={comment.creator} date={comment.date} body={comment.body}/>
                            )
                        })
                }
            </Flexbox>
            <textarea 
                placeholder="Введите комментарий"
                onChange={handleChange}
                value={comment}
                onKeyDown={handleSubmit}
                className="px-2 py-2 min-h-17 text-xl resize-y bg-primary overflow-y-auto text-wrap border border-accent rounded-xl"
            />
            {/*<Button onClick={handleTest} className="bg-green py-4">Отправить</Button>*/}
        </>
    )
}

export default CommentSection;