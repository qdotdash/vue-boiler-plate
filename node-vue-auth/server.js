const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: "admin",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5433,
});

const SECRET_KEY = "secret-key-qdotdash";

const users = [
  {
    id: 1,
    username: "user1",
    password: "$2a$12$G..As2eQ6ivKfyhL3B04c.BI5A8rg5mM7QU7xYKJBl2y3stGEHBjy",
  },
];

const sendResponse = ({ data, res }) => {
  res.json(data);
};

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  if (!token) return res.status(401).send("Unauthorized");

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).send("Unauthenticated");
  }
};

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send("Invalid username or password");
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  sendResponse({ data: { authToken: token }, res });
});

app.get("/protected", verifyToken, (req, res) => {
  sendResponse({
    data: { message: "This is a protected endpoint", user: req.user },
    res,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
