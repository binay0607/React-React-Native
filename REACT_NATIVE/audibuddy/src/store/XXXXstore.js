// import React, {createContext, useState} from 'react';
// import storeData from '../data/storeData';
// export const StoreContext = createContext({
//   storeInfoCtx: {
//     storesInfo: [],
//     updateStoreInfo: id => {},
//   },
// });

// function ContextProvider({children}) {
//   const [storeItems, setstoreInfo] = useState([...storeData]);
//   function updateStoreInfo(id) {
//     setstoreInfo(prevItems => {
//       return prevItems.map(item => {
//         if (item.id === id) {
//           item.isPending = false;
//         }
//         return item;
//       });
//     });
//   }
//   console.log('storeItem', storeItems);
//   const value = {
//     storeInfoCtx: {
//       storesInfo: storeItems,
//       updateStoreInfo: updateStoreInfo,
//     },
//   };

//   return (
//     <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
//   );
// }
// export default ContextProvider;
