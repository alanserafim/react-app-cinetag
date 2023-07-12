import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{
                favorito, 
                setFavorito
            }}
        >
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const { favorito, setFavorito } = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito) {
        //verifica se na lista de favoritos existe algum com o mesmo id e retorna true caso encontre
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id)

        let novaLista = [...favorito];

        if(!favoritoRepetido) {
            novaLista.push(novoFavorito);
            //Lista antiga + 1 novo item
            return setFavorito(novaLista);
        }

        //caso o favorito seja repetido removerá o mesmo da lista
        //desfavoritar
        //novaLista.slice(novaLista.indexOf(novoFavorito), 1);
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        // lista anterior -1 item
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}