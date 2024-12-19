const express = require("express");
const app = express();
const port = process.env.PORT || 1984;
app.set("view engine", "ejs");
app.use(express.static("public"));
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const Customer = require("./models/customerSchema");

const allRoutes = require("./routes/allRoutes");

mongoose
  .connect(
    "mongodb+srv://almousslliy:BrbLX8B6xZ9KfV0c@cluster0.we8gt.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(allRoutes);
