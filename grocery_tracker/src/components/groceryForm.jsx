import React from "react";
import "./groceryForm.css";
// import $ from "jquery";

const GroceryForm = () => {
  return (
    <div className="container groceryForm-page">
      <h3 className="blue-text text-darken-4">Grocery Tracker</h3>

      <h6>Add items to category</h6>

      <div className="form">
        <div className="row input-field">
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" />
        </div>
        <div className="row">
          <div className="col s3 input-field">
            <label htmlFor="amount">Amount</label>
            <input name="amount" id="amount " type="number" />
          </div>
          <div className="col s7 input-field">
            <label htmlFor="unit">Unit</label>
            <input name="unit" id="unit" type="text" />
          </div>
        </div>
        <div className="category row input-field">
          <label htmlFor="category">Category</label>
          <input name="category" id="category" type="text" />
        </div>
        <button className="btn waves-effect waves-purple" type="submit">
          Save and add more
        </button>
        <button className="red btn waves-effect waves-purple" type="submit">
          Save and continue
        </button>
      </div>
    </div>
  );
};

export default GroceryForm;
