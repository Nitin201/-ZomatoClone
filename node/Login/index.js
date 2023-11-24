const express = require("express");
const app = express();
const PORT = 9000;
const db = require("./db");
const authController= require("./controller/AuthController");
app.get("/auth",authController);
app.listen(PORT, () => console.log("Server started on the port", PORT));