import { ContainerProps } from "../interfaces"
import Flexbox from "./Flexbox"
import Text from "./Text"

interface SectionProps extends ContainerProps {
    header:string
    headerSize?: string
}

const Section = (props:SectionProps) => {
    return(
        <Flexbox className={`flex-col ${props.className}`}>
            <Text size={props.headerSize ? props.headerSize : "md"} className="font-bold">{props.header}</Text>
            {props.children}
        </Flexbox>
    )
}

export default Section