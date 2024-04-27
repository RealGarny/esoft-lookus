import Flexbox from "../components/Flexbox"
import Text from "../components/Text"
import Card from "../components/Card"
import filmsAPI from "../data/filmsAPI.json";
import routes from "../routes/routes";

const MainPage = () => {

    const filmsItemRoute:string = routes.filmsItem.split(":")[0];

    return(
        <Flexbox className="px-12 py-6 flex-col">
            <Text url="#" size="lg" className="font-semibold">Популярные фильмы</Text>
            <Text size="md" className="font-semibold">Фильтры</Text>
            <div className="grid grid-cols-3 gap-2">
                <Card
                    title={filmsAPI[0].title}
                    pageURL={`${filmsItemRoute}${filmsAPI[0].id}`}
                    posterURL={`/${filmsAPI[0].poster}`}
                    rating= {filmsAPI[0].rating}
                    ageRate= {filmsAPI[0].ageRate}
                    tagline={filmsAPI[0].tagline}
                    year= {filmsAPI[0].year}
                />
            </div>
        </Flexbox>
    )
}

export default MainPage