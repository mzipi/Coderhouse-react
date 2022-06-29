import catalogo from "./catalogo";

export const customFetch = () => {
    return new Promise ((resolve) => {
        resolve(catalogo);
    })
}

export const getGames = (id) => {
    return new Promise ((resolve) => {
        resolve(catalogo.find(game => game.id === id));
    })
}

export const getCategories = (genre) => {
    return new Promise ((resolve) => {
        resolve(catalogo.filter(game => game.genre === genre));
    })
}