const express = require("express");
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

let recycling = [
  {
    name: "Cardboard",
    Description: "Cardboard boxes",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "0",
    _id: uuidv4(),
  },

  {
    name: "Mixed Paper",
    Description: "Magazines",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "1",
    _id: uuidv4(),
  },

  {
    name: "Metal",
    Description: "Pans",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "2",
    _id: uuidv4(),
  },

  {
    name: "Glass",
    Description: "Mason Jars",
    Recyclable: "false",
    Quantity: "1",
    pricePerUnit: "3",
    _id: uuidv4(),
  },

  {
    name: "Plastic",
    Description: "Plastic bags",
    Recyclable: "false",
    Quantity: "1",
    pricePerUnit: "4",
    _id: uuidv4(),
  },

  {
    name: "Cartons",
    Description: "Almond Milk",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "5",
    _id: uuidv4(),
  },
];

// routes
recycledItemsRouter
  .get("/", (req, res) => {
    res.send(recycling);
  })

  .post("/", (req, res) => {
    const newRecycledItems = req.body;
    newRecycledItems._id = uuidv4();
    recycling.push(newRecycledItems);

    console.log(recycling);
    res.send(`Successfully added ${newRecycledItems.name} to the database`);
  });

module.exports = recycledItemsRouter;
