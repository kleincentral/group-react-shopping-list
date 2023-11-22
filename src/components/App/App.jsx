import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header/Header.jsx";
import "./App.css";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";
import ShoppingForm from "../ShoppingForm/ShoppingForm.jsx";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const getList = () => {
    axios
      .get("/shopping")
      .then((response) => {
        setShoppingList(response.data);
      })
      .catch((err) => {
        alert("error getting list");
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingForm getList={getList} />
        <ShoppingList shoppingList={shoppingList} getList={getList} />
      </main>
    </div>
  );
}

export default App;
