import React, { useState }from "react";

function Item({ name, category }) {
  //create state variable to track if item is in cart
  const [inCart, setInCart] = useState(false);
  //set class name for item based on whether its in the cart or not
  const itemClass = inCart ? "in-cart" : "";

  //create fn to handle add/remove from cart on button click
  function handleAddRemoveClick(){
    setInCart(!inCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddRemoveClick} className="add">
      {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;