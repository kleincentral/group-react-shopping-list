import axios from "axios";

function ShoppingListItem({ id, name, quantity, unit, getList }) {
  const buyItem = () => {
    console.log("Money", id);
  };
  const removeItem = () => {
    console.log("Begone", id);
    axios
      .delete(`/shopping/${id}`)
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error deleting from list");
        console.log(err);
      });
  };
  return (
    <>
      <li>
        {name}: {`${quantity} ${unit}`} <button onClick={buyItem}>Buy</button>{" "}
        <button onClick={removeItem}>Remove</button>
      </li>
    </>
  );
}

export default ShoppingListItem;
