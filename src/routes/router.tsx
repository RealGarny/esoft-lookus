import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import MainPage from "../pages/MainPage";
import Page404 from "../pages/Page404";
import FilmDetailsPage from "../pages/FilmDetailsPage";
import FilmsPage from "../pages/FilmsPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/",
          element: <MainPage/>
        },
        {
          path: "/films",
          element: <FilmsPage/>,
        },
        {
          path: "/films/:filmId",
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