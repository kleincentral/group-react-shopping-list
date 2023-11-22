import axios from "axios";

function ShoppingListItem({ id, name, quantity, unit, bought, getList }) {
  const buyItem = () => {
    console.log("Money", id);
    axios
      .put(`/shopping/${id}`)
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error updating list");
        console.log(err);
      });
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
        {name}: {`${quantity} ${unit}`}
        {bought ? (
          " Purchased"
        ) : (
          <>
            <button onClick={buyItem}>Buy</button>{" "}
            <button onClick={removeItem}>Remove</button>
          </>
        )}
      </li>
    </>
  );
}

export default ShoppingListItem;
