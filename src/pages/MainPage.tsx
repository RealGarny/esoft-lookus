import Flexbox from "../components/Flexbox"
import Text from "../components/Text"
import Card from "../components/Card"
import filmsAPI from "../data/filmsAPI.json";

const MainPage = () => {
    return(
        <Flexbox className="px-12 py-6 flex-col">
            <Text url="#" size="lg" className="font-semibold">Популярные фильмы</Text>
            <div>
                <Card
                    title={filmsAPI[0].title}
                    pageURL={`/films/${filmsAPI[0].id}`}
                    posterURL={`/${filmsAPI[0].poster}`}
                />
            </div>
        </Flexbox>
    )
}

export default MainPage