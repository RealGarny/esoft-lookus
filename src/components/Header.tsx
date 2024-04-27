import Flexbox from "./Flexbox";

interface HeaderProps {
    setIsSidebar: (...args:any) => void,
    isSidebar: boolean,
}

const Header:React.FC<HeaderProps> = ({setIsSidebar, isSidebar}) => {
    return(
        <Flexbox className=" px-4 sticky top-0 z-20 bg-secondary border-b border-accent">
            <button onClick={setIsSidebar}>{isSidebar ? "Close" : "Open"}</button>
            <p className="font-bold text-3xl py-2">Lookus</p>
        </Flexbox>
    )
}

export default Header;