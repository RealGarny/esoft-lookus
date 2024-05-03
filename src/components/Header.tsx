import { Link } from "react-router-dom";
import Flexbox from "./Flexbox";
import Text from "./Text";
import routes from "../routes/routes";
import CenteredImg from "./CenteredImg";

interface HeaderProps {
    setIsSidebar: (...args:any) => void,
    isSidebar: boolean,
}

const Header:React.FC<HeaderProps> = ({setIsSidebar, isSidebar}) => {
    return(
        <Flexbox className=" px-4 py-2 items-center sticky py-auto top-0 z-20 bg-secondary border-b border-accent">
            <button className="relative w-6 h-6" onClick={setIsSidebar}><CenteredImg className="filter invert" posterURL={isSidebar ? "/x.svg" : "/burger.svg"}/></button>
            <Link to={routes.main}>
                <img className="filter invert translate-y-1" src="/logo.svg"/>
            </Link>
        </Flexbox>
    )
}

export default Header;