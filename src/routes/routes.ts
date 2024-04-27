interface routes {
    [name: string] : string
}

const routes:routes = {
    main: "/",
    films: "/films",
    filmsItem: "/films/:filmId",
}
export default routes;