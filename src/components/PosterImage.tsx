interface PosterImageProps {
    posterURL: string,
    className?: string
}

const PosterImage:React.FC<PosterImageProps> = ({posterURL="", className}) => {
    if(typeof(posterURL) !== "string") {
        return null;
    }

    return(
        <img alt="card-image" className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] size-full ${className ? className : ""}`} src={posterURL}/>
    )
}

export default PosterImage;