const express = require("express");
const bodyParser = require("body-parser");
const path = require("path"); // Import the 'path' module for constructing file paths
const { sequelize } = require("./server/db");
const routes = require("./server/routes");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from different directories
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "Login page")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "Patient profile")));
app.use(express.static(path.join(__dirname, "pharma")));

app.use(bodyParser.json());
app.use("/api", routes);

// Serve the profile.html file when the /profile route is accessed
app.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "Patient profile", "profile.html"));
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
