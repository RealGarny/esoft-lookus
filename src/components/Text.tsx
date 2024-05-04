import React from "react";
import { ContainerProps } from "../interfaces";
import { Link } from "react-router-dom";

interface TProps extends ContainerProps {
    url?: string,
    size?: string,
    props?: any,
}

const Text:React.FC<TProps> = ({url, size, className, ...props}:TProps) => {
    let fontSize:string = "";

    switch(size) {
        case "lg": 
            fontSize = "md:text-5xl text-3xl"
            break;
        case "md": 
            fontSize = "md:text-3xl text-2xl"
            break;
        case "sm":
            fontSize = "md:text-md text-sm"
            break;
        default:
            fontSize = "md:text-md text-sm"
            break;
    }

    const cssClasses =  `${fontSize} ${className ? className : ""}`;

    if(url) {
        return (
            <Link to={url}>
                <p className={cssClasses} {...props}>{props.children}</p>
            </Link>
        )
    }
    
    return(
        <p className={cssClasses} {...props}>{props.children}</p>
    )
}

export default Text;