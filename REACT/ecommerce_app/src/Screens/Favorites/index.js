import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { favoriteActions } from "../../Redux/favorite_slice";
const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorite.itemList);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 390,
      }}
    >
      {favorites.length === 0 && <h3>No Item in your WishList</h3>}
      {favorites.map((item) => {
        const handleFav = () => {
          dispatch(favoriteActions.removeFromFavorite(item.id));
        };
        return (
          <div style={{ width: "60%" }} className="orderItem">
            <img
              className="oImg"
              src="https://assets.ajio.com/medias/sys_master/root/20211116/wgNp/6193e231f997ddf8f108fe35/-1117Wx1400H-4919468630-multi-MODEL2.jpg"
            ></img>
            <div className="infoContainer">
              <Link
                to={"/categories/Mobiles/" + item.catName + "/" + item.id}
                className="orderLink"
              >
                <h2 style={{ marginBottom: 0 }}>{item.name}</h2>
              </Link>
              <h3 style={{ marginTop: 4 }}>₹{item.price}</h3>
            </div>
            <button
              onClick={handleFav}
              style={{ marginLeft: 20, cursor: "pointer" }}
            >
              Remove From WishList
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FavoritesPage;
