import { Link } from "react-router-dom";
import Flexbox from "./Flexbox";
import Text from "./Text";
import routes from "../routes/routes";

interface HeaderProps {
    setIsSidebar: (...args:any) => void,
    isSidebar: boolean,
}

const Header:React.FC<HeaderProps> = ({setIsSidebar, isSidebar}) => {
    return(
        <Flexbox className=" px-4 sticky top-0 z-20 bg-secondary border-b border-accent">
            <button onClick={setIsSidebar}>{isSidebar ? "Close" : "Open"}</button>
            <Link to={routes.main}>
                <Text size="md" className="font-bold text-3xl py-2">Lookus</Text>
            </Link>
        </Flexbox>
    )
}

export default Header;