import Flexbox from "../components/Flexbox"
import Text from "../components/Text"
import Card from "../components/Card"

const MainPage = () => {
    return(
        <Flexbox className="px-12 py-6 flex-col">
            <Text url="#" size="lg" className="font-semibold">Популярные фильмы</Text>
            <div>
                <Card
                    title="Paciffic rim"
                    pageURL="#"
                    posterURL="/tixookeanskij-rubezh-pacific-rim-fantastika-vojna-2013.jpg"
                />
            </div>
        </Flexbox>
    )
}

export default MainPage