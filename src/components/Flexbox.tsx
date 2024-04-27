import { ContainerProps } from "../interfaces"

interface FlexboxProps extends ContainerProps {
    gap?:string
}

const Flexbox:React.FC<FlexboxProps> = (props) => {
    return(
    <div className={`flex ${!props.gap ? "gap-2" : `gap-${props.gap}`} ${props.className}`}>
        {props.children}
    </div>
    )
}

export default Flexbox 