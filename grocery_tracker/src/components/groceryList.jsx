import "./groceryList.css";
import { useContext, useState } from "react";
import inventoryContext from "../context/inventoryContext";
import GroceryListItem from "./groceryListItem";

const GroceryList = () => {
  let [selectedItemsList, setSelectedItemsList] = useState([]);
  const inventory = useContext(inventoryContext).inventory;
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

  const selectedItems = (prod) => {
    let list = [...selectedItemsList];
    let inv = [...test];
    let inList = false;
    let selected = false;
    console.log("checked item: " + prod);

    if (list.length < 1) {
      list.push(prod);
      setSelectedItemsList(list);
      console.log(list);
    } else {
      for (let i = 0; i < list.length; i++) {
        if (prod._id === list[i]._id) {
          inList = true;
          if (prod.selected === list[i].selected) {
            selected = true;
          } else {
            selected = false;
          }
        }
        if (inList) {
          list[i].selected = prod.selected;
          setSelectedItemsList(list);
        }
        break;
      }
      if (!inList) {
        list.push(prod);
        setSelectedItemsList(list);
        console.log(list);
      }
    }
  };

  const btn = () => {
    console.log(selectedItemsList);
  };

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
      <button onClick={btn}>Test</button>
    </div>
  );
};

export default GroceryList;
