interface CenteredImgProps {
    posterURL: string,
    className?: string
}

const CenteredImg:React.FC<CenteredImgProps> = ({posterURL="", className}) => {
    if(typeof(posterURL) !== "string") {
        return null;
    }

    return(
        <img alt="card-image" className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-full ${className ? className : ""}`} src={posterURL}/>
    )
}

export default CenteredImg;