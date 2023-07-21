import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  //create state variable for selected category
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCategoryChange(e){
    setSelectedCategory(e.target.value)
  }
  //filter items based on selected category
  const filteredItems = items.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;