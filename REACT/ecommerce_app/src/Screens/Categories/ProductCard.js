import React from "react";
import "./ProductCard.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { favoriteActions } from "../../Redux/favorite_slice";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorite.itemList);
  console.log("fav=>", favorites);
  const user = useSelector((state) => state.user.userName);
  const handleFav = () => {
    console.log(user);
    if (user === "Login") {
      navigate("/");
      return;
    }
    if (favorites.includes(item)) {
      dispatch(favoriteActions.removeFromFavorite(item.id));
    } else {
      dispatch(favoriteActions.addToFavorite(item));
    }
  };
  return (
    <div className="productCardContainer">
      <Link
        to={"/categories/Mobiles/" + item.catName + "/" + item.id}
        className="imgContainer"
      >
        <img
          className="productImg"
          src="https://assets.ajio.com/medias/sys_master/root/20211116/wgNp/6193e231f997ddf8f108fe35/-1117Wx1400H-4919468630-multi-MODEL2.jpg"
        ></img>
      </Link>
      <h3 className="mname" style={{ margin: 0, marginTop: 6 }}>
        {item.name}
      </h3>
      <div className="ratings">
        <button className="rBtn">4.4</button>
        <p style={{ margin: 0 }}>239 Ratings</p>
      </div>
      <h4>
        ₹{item.price}/- <span className="assured"> B-Assured</span>
      </h4>
      {item.isTrending && <div className="bestSelling">Best Seller</div>}

      <div className="favorite" onClick={handleFav}>
        {!favorites.includes(item) && (
          <AiOutlineHeart style={{ color: "red", fontSize: 30 }} />
        )}
        {favorites.includes(item) && (
          <AiFillHeart style={{ color: "red", fontSize: 30 }} />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
