const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    description: "The name of the food item."
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    description: "The price of the food item."
  },
  description: {
    type: String,
    required: true,
    description: "A brief description of the food item."
  },
  category: {
    type: String,
    required: true,
    description: "The category of the food item, e.g., Pizza, Salad, etc."
  },
  vegetarian: {
    type: Boolean,
    required: true,
    description: "Indicates if the food item is vegetarian."
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;
