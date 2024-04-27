import Flexbox from "./Flexbox";

const Sidebar = ({isSidebar}) => {

    return(
    <Flexbox className={`${isSidebar ? "" : "translate-x-[-125%]"} transition-all md:block fixed top-0 left-0 z-10 flex-col h-screen px-4 py-20 border border-accent w-25 text-center align-middle bg-primary`}>
        <Flexbox className="flex">
            <p>option 1</p>
            <p>option 2</p>
            <p>option 3</p>
        </Flexbox>
    </Flexbox>
    )
}

export default Sidebar;