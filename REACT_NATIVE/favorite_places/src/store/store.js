import React, {createContext, useState} from 'react';

export const Store = createContext({
  places_context: {
    places: [],
    updatePlaces: place => {},
    deletePlace: id => {},
  },
});

function StoreProvider({children}) {
  const [placeItems, setPlaceItems] = useState([]);
  function updatePlaces(newPlace) {
    setPlaceItems(prevPlaces => [newPlace, ...prevPlaces]);
  }
  function deletePlace(id) {
    setPlaceItems(placeItems.filter(item => item.id !== id));
  }

  const value = {
    places_context: {
      places: placeItems,
      updatePlaces: updatePlaces,
      deletePlace: deletePlace,
    },
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default StoreProvider;
