import React, { createContext, useState } from "react";

export const FavoriteContext= createContext({
    ids: [],
    setids: (ids)=>{},
    addFavorite: (id)=> {},
    removeFavorite: (id)=> {},
});

function FavoriteContextProvider({children}){
    const [favoriteMeals, setFavoriteMeals] = useState([]); 
    function addFavorite(id){
        setFavoriteMeals((currentMeals)=> [...currentMeals, id]);
    }
    function removeFavorite(id){
        setFavoriteMeals((currentMeals)=> currentMeals.filter((itemid)=> itemid!==id));
    }
    function setids(ids){
        setFavoriteMeals(ids);
    }
    const value= {
        ids: favoriteMeals,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export default FavoriteContextProvider;
