import { useState } from "react";
import axios from "axios";

function ShoppingForm({ getList }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const addItem = (e) => {
    e.preventDefault();
    console.log("Hi");
    axios
      .post(`/shopping`, { name: item, quantity: quantity, unit: unit })
      .then((response) => {
        setQuantity("");
        setUnit("");
        setItem("");
        getList();
      })
      .catch((err) => {
        alert("error posting to list");
        console.log(err);
      });
  };

  return (
    <>
      <h2>Add an Item</h2>
      <form>
        <label>
          Item:
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <label>
          Unit:
          <input
            type="text"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </label>
        <button type="submit" onClick={addItem}>
          Submit
        </button>
      </form>
    </>
  );
}

export default ShoppingForm;
