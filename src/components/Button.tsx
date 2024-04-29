import { ContainerProps } from "../interfaces"

interface BProps extends ContainerProps {
    onClick? : (...args:any)=>void
}

const Button = (props:BProps) => {
    return(
        <button 
            className={`px-1 py-1 w-full font-semibold text-center rounded-lg ${props.className}`}
            onClick={props.onClick && props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button