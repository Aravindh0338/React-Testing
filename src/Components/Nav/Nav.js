import React from "react";
import "../Nav/Nav.css";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Nav() {
  return (
    <div className="nav">
      <div className="iconWrapper">
        <LocalMallIcon fontSize="large" />
        <h3>ECommerce</h3>
      </div>
      <div className="cartCountWrapper">
        <ShoppingCartIcon />
        <span className="cartCount">1</span>
      </div>
    </div>
  );
}

export default Nav;
