const express = require("express");
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

let recycling = [
  {
    name: "Cardboard",
    description: "Cardboard boxes",
    recyclabe: true,
    quantity: 1,
    price_per_unit: 0,
    _id: uuidv4(),
  },
  {
    name: "Mixed Paper",
    description: "Magazines",
    recyclabe: true,
    quantity: 1,
    price_per_unit: 1,
    _id: uuidv4(),
  },
  {
    name: "Metal",
    description: "Pans",
    recyclabe: true,
    quantity: 1,
    price_per_unit: 2,
    _id: uuidv4(),
  },
  {
    name: "Cartons",
    description: "Juice Boxes",
    recyclabe: true,
    quantity: 1,
    price_per_unit: 3,
    _id: uuidv4(),
  },
  {
    name: "Glass",
    description: "Mason Jars",
    recyclabe: true,
    quantity: 1,
    price_per_unit: 4,
    _id: uuidv4(),
  },
];

// Routes

recycledItemsRouter
  .get("/", (req, res) => {
    res.send(recycling);
  })

  .post("/", (req, res) => {
    const newRecycledItem = req.body;
    newRecycledItem._id = uuidv4();
    recycling.push(newRecycledItem);
    res.send(newRecycledItem.name);
  })

  .delete("/:recycledId", (req, res) => {
    const recycledId = req.params.recycledId;
    const recycledIndex = recycling.findIndex(
      (item) => item._id === recycledId
    );
    recycling.splice(recycledIndex, 1);
    res.send("Data Successfully deleted!");
  })

  .put("/:recycledId", (req, res) => {
    const recycledId = req.params.recycledId;
    const recycledIndex = recycling.findIndex(
      (item) => item._id === recycledId
    );
    Object.assign(recycling[recycledIndex], req.body);
    res.send("Data Successfully updated!");
  });

module.exports = recycledItemsRouter;
