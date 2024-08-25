const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;
const productRouter = require("./src/router/productsRouter");

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/products", productRouter);

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    username: "mix eiei",
    customers: ["Kitti", "Kittikorn", "Kitty"],
  });
});
app.listen(PORT, () => {
  debug("Listening on port" + chalk.green(" : ", PORT));
});
