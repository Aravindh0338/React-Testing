import React from "react";
import "../Show/Show.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Show({ item }) {
  return (
    <div className="card" data-testid="card">
      <div className="image">
        <img
          alt="Not Available"
          src={item.image}
          width="200px"
          height="200px"
        />
      </div>

      <div className="content">
        <div className="title">
          <p>{item.title}</p>
          <p>{item.category}</p>
        </div>
        <div className="priceCart">
          <p>${item.price}</p>
          <ShoppingCartIcon className="cartSelect" />
        </div>
      </div>
    </div>
  );
}

export default Show;
