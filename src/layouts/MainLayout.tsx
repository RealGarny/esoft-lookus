import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import Flexbox from "../components/Flexbox"
import Container from "../components/Container"

const MainLayout = () => {
    return(
        <>
            <Container maxW="lg">
                <Flexbox>
                    <Sidebar/>
                    <Flexbox className="flex-col justify-between">
                        <Outlet/>
                        <footer>footer</footer>
                    </Flexbox>
                </Flexbox>
            </Container>
        </>
    )
}

export default MainLayout