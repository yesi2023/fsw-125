const express = require("express");
const todosRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

let todoExpress = [
  {
    name: "Study Code",
    description: "Work on JS Project",
    imageUrl:
      "https://images.unsplash.com/photo-1550063873-ab792950096b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    quantity: 1,
    pricePerUnit: 0,
    recyclable: false,
    _id: uuidv4(),
  },
  {
    name: "Lunch With Friends",
    description: "Pizza and Wine",
    imageUrl:
      "https://images.unsplash.com/photo-1611765083444-a3ce30f1c885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    quantity: 3,
    pricePerUnit: 8,
    recyclable: true,
    _id: uuidv4(),
  },
  {
    name: "Gym",
    description: "Weight Lifting",
    imageUrl:
      "https://images.unsplash.com/photo-1609899464726-209befaac5bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    quantity: 1,
    pricePerUnit: 0,
    recyclable: true,
    _id: uuidv4(),
  },
  {
    name: "Meditate",
    description: "Meditate On The Beach",
    imageUrl:
      "https://images.unsplash.com/photo-1526724038726-3007ffb8025f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    quantity: 1,
    pricePerUnit: 0,
    recyclable: false,
    _id: uuidv4(),
  },
];

todosRouter
  .get("/", (req, res) => {
    res.send(todoExpress);
  })

  .get("/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoExpress.findIndex((item) => item._id === todoId);
    res.send(todoExpress[todoIndex]);
  })

  .post("/", (req, res) => {
    const newTodoItem = req.body;
    newTodoItem._id = uuidv4();
    todoExpress.push(newTodoItem);
    res.send(`Successfully added ${newTodoItem.name} to the Todo List.`);
  })

  .delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoExpress.findIndex((item) => item._id === todoId);
    todoExpress.splice(todoIndex, 1);
    res.send("Resource successfully deleted!");
  })

  .put("/:todoId", (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = todoExpress.findIndex((item) => item._id === todoId);
    Object.assign(todoExpress[todoIndex], req.body);
    res.send("Resource successfully updated!");
  });

module.exports = todosRouter;
