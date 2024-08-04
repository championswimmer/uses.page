// Create express app
var express = require("express");
var app = express();

// Routes
const userRoute = require("./routes/userRoutes");

app.use(express.json());
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/v1/users", userRoute);

app.get("/health", (req, res, next) => {
  res.json({ message: "Ok" });
});

// Default response for any other request
app.get("*", function (req, res) {
  res.status(404).send("Eww brother ewww, what's that brother??");
});

// Server port
var HTTP_PORT = 8000;

// Start server
app.listen(HTTP_PORT, () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT));
});
