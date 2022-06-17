const express = require("express");
const itemsIntakeRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

let itemsNew = [
  {
    name: "Cardboard",
    Description: "Paper Bags",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "1",
    _id: uuidv4(),
  },

  {
    name: "Mixed Paper",
    Description: "Magazines",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "2",
    _id: uuidv4(),
  },

  {
    name: "Metal",
    Description: "Pans",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "3",
    _id: uuidv4(),
  },

  {
    name: "Glass",
    Description: "Marbels",
    Recyclable: "false",
    Quantity: "1",
    pricePerUnit: "4",
    _id: uuidv4(),
  },

  {
    name: "Plastic",
    Description: "plastic straws",
    Recyclable: "false",
    Quantity: "1",
    pricePerUnit: "5",
    _id: uuidv4(),
  },

  {
    name: "Cartons",
    Description: "Almond milk",
    Recyclable: "true",
    Quantity: "1",
    pricePerUnit: "6",
    _id: uuidv4(),
  },
];

// routes
itemsIntakeRouter
  .get("/", (req, res) => {
    res.send(itemsNew);
  })

  .post("/", (req, res) => {
    const newItem = req.body;
    newItem._id = uuidv4();
    itemsNew.push(itemsNew);

    console.log(itemsNew);
    res.send(`Successfully added ${itemsNew.name} to the database`);
  });

module.exports = itemsIntakeRouter;
