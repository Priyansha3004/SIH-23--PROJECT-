const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./server/db");
const routes = require("./server/routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.static("Login page"));
app.use(express.static("images"));
app.use(express.static("Patient profile"));
app.use(express.static("pharma"));

app.use(bodyParser.json());
app.use("/api", routes);

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
