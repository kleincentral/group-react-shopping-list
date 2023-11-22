import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";
import { useState } from "react";
import axios from "axios";

function ShoppingList({ shoppingList, getList }) {
  const reset = () => {
    console.log("resetting");
    axios
      .put("/shopping")
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error updating list");
        console.log(err);
      });
  };
  const clear = () => {
    console.log("delete");
    axios
      .delete("/shopping")
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error updating list");
        console.log(err);
      });
  };
  return (
    <>
      <h2>Shopping List</h2>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={clear}>Clear</button>
      </div>
      <ul>
        {shoppingList.map((item) => {
          return (
            <ShoppingListItem
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              unit={item.unit}
              bought={item.bought}
              getList={getList}
            />
            // <li key={item.id}>{item.name}: {item.quantity}{item.unit}</li>
          );
        })}
      </ul>
    </>
  );
}

export default ShoppingList;
