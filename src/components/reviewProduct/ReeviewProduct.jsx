import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./reviewProduct.css";

const ReeviewProduct = ({ product, deleteProduct }) => {
  const { id, name, price, img, quantity } = product;

  return (
    <div className="product-group">
      <img src={img} alt="" />
      <div className="product-details">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button onClick={() => deleteProduct(id)}>
        <FontAwesomeIcon icon={faTrashCan} size="xl" />
      </button>
    </div>
  );
};

export default ReeviewProduct;
