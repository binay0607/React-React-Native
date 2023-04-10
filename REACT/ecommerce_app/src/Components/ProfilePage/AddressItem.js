import React from "react";
import { useNavigate } from "react-router-dom";

const AddressItem = ({ item, updateAdd }) => {
  const navigate = useNavigate();
  const handleDel = () => {
    const addressArr = JSON.parse(localStorage.getItem("address")).adresses;
    const newAddArr = addressArr.filter((aitem) => aitem.id != item.id);
    updateAdd(newAddArr);
    localStorage.setItem("address", JSON.stringify({ adresses: newAddArr }));
  };
  const handleEdit = () => {
    navigate("editAdd", { state: { item: item } });
  };
  return (
    <div className="addressContainer">
      <div>
        <p>Deliver To: {item.dName}</p>
        <p>Complet Address: {item.cAdd}</p>
        <p>Pin: {item.pPin}</p>
        <p>Contact NUmber: {item.cNum}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button className="addressBtn" onClick={handleEdit}>
          Edit
        </button>
        <button className="addressBtn" onClick={handleDel}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AddressItem;
