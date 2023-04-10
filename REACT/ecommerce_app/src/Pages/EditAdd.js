import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./EditAdd.css";
const EditAdd = () => {
  const prevAdd = useLocation().state?.item;

  const navigate = useNavigate();
  const [name, setName] = useState(prevAdd ? prevAdd.dName : "");
  const [add, setAdd] = useState(prevAdd ? prevAdd.cAdd : "");
  const [pin, setPin] = useState(prevAdd ? prevAdd.pPin : "");
  const [mob, setMob] = useState(prevAdd ? prevAdd.cNum : "");
  const handleAdd = () => {
    const addressArr = JSON.parse(localStorage.getItem("address")).adresses;
    if (prevAdd) {
      const newAddress = addressArr.map((item) => {
        if (item.id === prevAdd.id) {
          return { dName: name, cAdd: add, pPin: pin, cNum: mob, id: item.id };
        } else {
          return item;
        }
      });
      localStorage.setItem("address", JSON.stringify({ adresses: newAddress }));
      navigate("/profile", { state: { returned: true } });
      return;
    }
    const id = Math.random() + pin;
    addressArr.push({ dName: name, cAdd: add, pPin: pin, cNum: mob, id: id });
    localStorage.setItem("address", JSON.stringify({ adresses: addressArr }));
    // to go back to the previous page
    navigate(-1);
  };
  return (
    <div className="editAddContainer">
      <div className="editAdd">
        <label className="inputC">
          Name:{" "}
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label className="inputC">
          Complete Address:{" "}
          <input
            className="input"
            type="text"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
        </label>

        <label className="inputC">
          Pin Code:{" "}
          <input
            className="input"
            type="text"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </label>

        <label className="inputC">
          Contact Number:{" "}
          <input
            className="input"
            type="text"
            value={mob}
            onChange={(e) => setMob(e.target.value)}
          />
        </label>

        <button
          style={{ marginTop: 30, cursor: "pointer" }}
          onClick={handleAdd}
        >
          {" "}
          Save Address
        </button>
      </div>
    </div>
  );
};

export default EditAdd;
