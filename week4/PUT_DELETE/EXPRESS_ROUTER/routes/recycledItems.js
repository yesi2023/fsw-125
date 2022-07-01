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
    name: "Glass",
    description: "Mason Jars",
    recyclabe: true,
    quantity: 1,
    price_per_unit: 3,
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
    res.send(
      `Successfully added ${newRecycledItem.name} to the database of recycled items`
    );
  })

  .delete("/:recycledId", (req, res) => {
    const recycledId = req.params.recycledId;
    const recycledIndex = recycling.findIndex(
      (item) => item._id === recycledId
    );
    recycling.splice(recycledIndex, 1);
    res.send("Resource successfully deleted!");
  })

  .put("/:recycledId", (req, res) => {
    const recycledId = req.params.recycledId;
    const recycledIndex = recycling.findIndex(
      (item) => item._id === recycledId
    );
    Object.assign(recycling[recycledIndex], req.body);
    res.send("Resource successfully updated!");
  });

module.exports = recycledItemsRouter;

// * Notes From Video Below;

// * .get(':bookId', (req, res) => {
// * console.log(req.params)  we can use this
// * const bookId = req.params.bookId;
// * const singularBook = books.find(book => book._id === bookId);
// * res.send(singularBook);
// * })  GET one

// * .get('/search/genre', (req, res) => {
// * const bookGenre = req.query.genre;
// * const filteredBooks = books.filter(book => book.genre === bookGenre);
// * console.log(req.query);
//})* GET by genre

// * .delete('/:bookId', (req, res) => {
// * const bookId = req.params.bookId;
// * const bookIndex = books.findIndex(book => book._id === bookId);
// * books.splice(bookIndex, 1);
// * res.send('Resource succesfully deleted!')

//}) * DELETE one

// * .put('/:bookId', (req, res) =>{
// * const bookId = req.params.bookId;
// * const bookIndex = books.findIndex(book => book._id === bookId);
// * const updateBookResource = Object.assign(books[bookIndex], req.body);
// * res.send(`Resource succesfully updated to ${updatedBookResource}`);
//}) * PUT one

// * a route parameter is never null or undefined
// * a route parameter is always a string with positive lenght
