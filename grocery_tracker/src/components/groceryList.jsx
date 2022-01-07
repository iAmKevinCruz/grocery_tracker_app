import "./groceryList.css";
import { useContext, useState } from "react";
import inventoryContext from "../context/inventoryContext";
import GroceryListItem from "./groceryListItem";

const GroceryList = () => {
  let [selectedItemsList, setSelectedItemsList] = useState([]);
  const inventory = useContext(inventoryContext).inventory;

  const selectedItems = (prod) => {
    let list = [...selectedItemsList];
    let inv = [...test];
    console.log("checked item: " + prod);

    if (list.length < 1) {
      list.push(prod);
      setSelectedItemsList(list);
      console.log(list);
    } else {
      for (let i = 0; i < list.length; i++) {
        if (prod == list[i]) {
          return;
        } else {
          list.push(prod);
          setSelectedItemsList(list);
          console.log(list);
        }
      }
    }
  };

  const btn = () => {
    let list = [...selectedItemsList];
    let num = 2;
    let tool = list.find(2);
    // console.log(list.find(num > 1));
    console.log(tool);
  };

  let test = [
    { _id: 1, name: "apples", amount: 2, unit: "oz", category: "fruit" },
    {
      _id: 2,
      name: "celery",
      amount: 3,
      unit: "sticks",
      category: "vegetable",
    },
  ];

  return (
    <div className="grocery-list">
      <h1>Inventory</h1>
      <h6>Here's what you got</h6>

      <table className="centered">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {test.map((prod) => (
            <GroceryListItem key={prod._id} data={prod} send={selectedItems} />
          ))}
        </tbody>
      </table>
      <button onClick={btn}>Test</button>
    </div>
  );
};

export default GroceryList;
