/* The below code is for Queston 5

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const users = [
  { id: "1", name: "Rashmita", email: "Rash@gmail.com", details: "Admin" },
  { id: "2", name: "Ravi", email: "Ravi@gmail.com", details: "Customer" }
];

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.listen(4000, () => console.log("Server running on port 4000")); */

/*
  Q9 + Q10 + Q4 Backend
  ---------------------------------------------------------
  - GET /products       → list of products
  - POST /products      → validate name & price
  - Global middleware logs method + URL
  - JWT Authentication (Q10)
  - /users/:id endpoint for Q4 React
*/

const express = require("express");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// Import sample user data
const users = require("./usersData");

// ---------------- GLOBAL LOGGER MIDDLEWARE ----------------
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} → ${req.url}`);
  next();
});

// ------------------- Q9 PRODUCT ROUTES --------------------
let products = [
  { id: 1, name: "Watch", price: 2000 },
  { id: 2, name: "Shoes", price: 1200 }
];

// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST /products with validation
app.post(
  "/products",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("price").isNumeric().withMessage("Price must be a number")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);

    res.status(201).json(newProduct);
  }
);

// ------------------- Q4: USER ROUTE -----------------------
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === req.params.id);

  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
});

// -------------------- Q10 JWT AUTH -----------------------
const SECRET = "MY_SECRET_KEY";

// Login route → returns JWT token
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Static user as per question
  if (email === "admin@test.com" && password === "12345") {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

// JWT Middleware
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;

  if (!header) return res.status(401).json({ error: "No token" });

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    return next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// Protected Route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}` });
});

// ----------------- START SERVER ---------------------------
app.listen(4000, () => console.log("Backend running on port 4000"));

