const express = require("express");
const ThingFinder = express.Router();
const { v4: uuidv4 } = require("uuid");

// * Used The Inventory as assignment

const items = [
  {
    name: "avocado",
    type: "food",
    specific: "fruit",
    price: 20,
    _id: uuidv4(),
  },
  { name: "shirt", type: "clothing", price: 40, _id: uuidv4() },
  { name: "lego set", type: "toy", price: 30, _id: uuidv4() },
  { name: "hat", type: "clothing", price: 15, _id: uuidv4() },
  { name: "pasta", type: "food", price: 10, _id: uuidv4() },
  { name: "baseball", type: "toy", price: 33, _id: uuidv4() },
  { name: "lemons", type: "food", specific: "fruit", price: 8, _id: uuidv4() },
];

ThingFinder.get("/", (req, res) => {
  res.send(items);
})

  .get("/:food", (req, res) => {
    const food = req.params.food;
    res.send(items.filter((item) => item.type === food));
  })

  .get("/:clothing", (req, res) => {
    const clothing = req.params.clothing;
    res.send(items.filter((item) => item.type === clothing));
  })

  .get("/:toy", (req, res) => {
    const toy = req.params.toy;
    res.send(items.filter((item) => item.type === toy));
  })

  .get("/food/type", (req, res) => {
    const fruit = req.query.type;
    const filteredItems = items.filter((item) => item.specific === fruit);
    res.send(filteredItems);
  });

module.exports = ThingFinder;

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
