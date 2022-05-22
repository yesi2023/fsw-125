//math.js

//1. The math.js file should create and export functions for addition, subtraction, multiplication and division.
//2. Import the functions you created in the math.js into the app.js file using require.

// The math.js file should create and export functions for addition, subtraction, multiplication and division.

const sum = (a, b) => {
  return a + b;
};

const subtract = (c, d) => {
  return c - d;
};

const mulitply = (e, f) => {
  return e * f;
};

const divide = (g, h) => {
  return g / h;
};

module.exports = {
  sum,
  subtract,
  mulitply,
  divide,
};
