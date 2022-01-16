const mongoose = require("mongoose");

const GrocerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of item is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    unit: {
      type: String,
      required: [true, "Please select the unit of measurement"],
    },
    category: {
      type: String,
    },
    user_id: {
      type: String,
      required: [true, "ID error"],
    },
  },
  { timestamps: true }
);

const Grocery = mongoose.model("Grocery", GrocerySchema);

module.exports = Grocery;
