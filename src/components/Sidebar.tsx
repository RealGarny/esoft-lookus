import Flexbox from "./Flexbox";

const Sidebar = () => (
    <Flexbox className="hidden md:block sticky flex-col h-screen px-4 py-3 w-25 text-center align-middle bg-black">
        <p className="font-bold text-3xl py-5">Lookus</p>
        <Flexbox className="flex">
            <p>option 1</p>
            <p>option 2</p>
            <p>option 3</p>
        </Flexbox>
    </Flexbox>
)

export default Sidebar;