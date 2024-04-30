import { ContainerProps } from "../interfaces";
import Flexbox from "./Flexbox"

const Card:React.FC<ContainerProps> = (props) => {
    return(
        <Flexbox className={`group bg-secondary border border-accent rounded-lg ${props.className}`}>
            {props.children}
        </Flexbox>
    )
}

export default Card;