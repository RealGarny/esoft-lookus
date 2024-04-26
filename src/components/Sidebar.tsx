import Flexbox from "./Flexbox";

const Sidebar = () => (
    <Flexbox className="sticky flex-col h-screen px-4 py-3 w-25 text-center align-middle bg-black">
        <p className="font-bold text-2xl">Lookus</p>
        <Flexbox className="flex">
            <p>option 1</p>
            <p>option 2</p>
            <p>option 3</p>
        </Flexbox>
    </Flexbox>
)

export default Sidebar;