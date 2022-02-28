const express = require("express");
const cors = require("cors");
const app = express();
let corsOptions = {
  origin: "http://localhost:4200", // URL of the frontend
};

app.use(cors(corsOptions));
app.use(express.json()); // parsing application/json
app.use(express.urlencoded({ extended: true })); // parsing application/x-www-form-urlencodedconst PORT = process.env.PORT || 8080; // Portapp.listen(PORT, () => {
const db = require("./index");
db.sequelize.sync();
require("./App/routes/articles.routes")(app);

const PORT = process.env.PORT || 8080;

// Port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
