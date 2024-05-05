import Flexbox from "../components/Flexbox";
import Text from "../components/Text";
import routes from "../routes/routes";

const Page404 = () => (
    <Flexbox className="flex-col size-full items-center justify-center">
        <Text className="font-bold text-9xl">404</Text>
        <Text className="text-4xl">страница не найдена.</Text>
        <Text url={routes.main} className="text-2xl underline">Вернуться на главную</Text>
    </Flexbox>
)

export default Page404;