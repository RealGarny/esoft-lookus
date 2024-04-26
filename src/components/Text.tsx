import React from "react";
import { ContainerProps } from "../interfaces";

interface TProps extends ContainerProps {
    type?: string,
    url?: string,
    size?: string,
}

const Text:React.FC<TProps> = (props) => {
    let fontSize:string = "";

    switch(props.size) {
        case "lg": 
            fontSize = "md:text-5xl text-3xl"
            break;
        case "md": 
            fontSize = "md:text-3xl text-2xl"
            break;
        case "sm":
            fontSize = "md:text-sm text-xs"
            break;
        default:
            fontSize = "md:text-sm text-xs"
            break;
    }

    const cssClasses =  `${fontSize} ${props.className ? props.className : ""}`;

    if(props.url) {
        return <a href={props.url} className={cssClasses}>{props.children}</a>
    }
    
    return(
        <p className={cssClasses}>{props.children}</p>
    )
}

export default Text;