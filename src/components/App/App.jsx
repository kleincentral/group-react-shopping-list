import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../Header/Header.jsx";
import "./App.css";
import ShoppingList from "../ShoppingList/ShoppingList.jsx";

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
        <ShoppingList shoppingList={shoppingList} getList={getList} />
      </main>
    </div>
  );
}

export default App;
