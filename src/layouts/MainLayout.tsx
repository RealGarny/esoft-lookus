import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Flexbox from "../components/Flexbox"
import Container from "../components/Container"

const MainLayout = () => {
    return(
        <>
            <Container maxW="xl">
                <Flexbox className="gap-0">
                    <Sidebar/>
                    <div className="h-full w-full">
                        <Outlet/>
                        <footer className="mt-auto px-2 py-4 bg-secondary w-full">footer</footer>
                    </div>
                </Flexbox>
            </Container>
        </>
    )
}

export default MainLayout