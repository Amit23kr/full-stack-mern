const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

mongoose
  .connect(
    "mongodb://localhost:27017/mernloginreg",
    { useNewUrlParser: true }
  )
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

const Users = require("./routes/Users");
app.use("/users", Users);

app.listen(port, () => {
  console.log("Server is  running on port" + port);
});
