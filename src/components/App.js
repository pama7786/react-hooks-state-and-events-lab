import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(false)
  const appClass = darkMode ? "App dark" : "App light"

  //create a fn to handle dark mode toggle on click
  function handleDarkModeToggle(){
    setDarkMode(!darkMode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode
        </button>
      </header>
      <ShoppingList items={itemData}/>
    </div>
  )



  // ==> doing this makes the dark mode toggle fn act weird when removing or adding items to cart 
  // return (
  //   <div onClick={() => setDarkMode(!darkMode)}className={appClass}>
  //     <header>
  //       <h2>Shopster</h2>
  //       <button>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
  //     </header>
  //     <ShoppingList items={itemData} />
  //   </div>
  // );
}

export default App;