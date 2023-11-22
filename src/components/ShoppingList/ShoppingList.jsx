import ShoppingListItem from "../ShoppingListItem/ShoppingListItem";

function ShoppingList({ shoppingList, getList }) {
  return (
    <>
      <h2>Shopping List</h2>
      <ul>
        {shoppingList.map((item) => {
          return (
            <ShoppingListItem
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              unit={item.unit}
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
