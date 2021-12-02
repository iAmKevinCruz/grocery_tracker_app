import React, { useState } from "react";
import inventoryContext from "./inventoryContext";

const GlobalState = (props) => {
  const [inventory, setInventory] = useState([]);

  return (
    <inventoryContext.Provider
      value={{
        inventory: inventory,
        addProductToInventory: addToInventory,
        removeProductFromInventory: removeFromInventory,
      }}
    >
      {props.children}
    </inventoryContext.Provider>
  );
};

export default GlobalState;
