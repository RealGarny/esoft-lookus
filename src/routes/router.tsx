import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import Page404 from "../pages/Page404";
import FilmDetailsPage from "../pages/FilmDetailsPage";
import FilmsPage from "../pages/FilmsPage";
import routes from "./routes";

const router = createBrowserRouter([
    {
      path: routes.main,
      element: <MainLayout/>,
      children: [
        {
          path: routes.main,
          element: <MainPage/>
        },
        {
          path: routes.films,
          element: <FilmsPage/>,
        },
        {
          path: routes.filmsItem,
          element: <FilmDetailsPage/>
        }
      ]
    },
    {
      path: "*",
      element: <Page404/>
    }
  ]);

  export default router;