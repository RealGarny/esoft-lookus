import Flexbox from "./Flexbox"
import CenteredImg from "./CenteredImg"
import Text from "./Text"


interface pComment {
    creator: string,
    date: string,
    body: string
}

const CommentItem:React.FC<pComment> = (props) => {
    return(
        <Flexbox className="justify-start">
            <div className="relative bg-secondary size-14 text-center rounded-full overflow-hidden">
                <CenteredImg className="filter invert" posterURL="/anon.png"/>
            </div>
            <Flexbox className="flex-1 flex-col">
                <Flexbox>
                    <Text>{props.creator}</Text>
                    <Text>{props.date}</Text>
                </Flexbox>
                <Text className="px-2 py-2 rounded-md bg-secondary">{props.body}</Text>
            </Flexbox>
        </Flexbox>
    )
}

export default CommentItem;