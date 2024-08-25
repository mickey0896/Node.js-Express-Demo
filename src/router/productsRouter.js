const express = require("express");
const products = require("../../data/products.json");
const productRouter = express.Router();

productRouter.route("/").get((req, res) => {
  res.render("products", { products });
});
productRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  res.render("product", {
    product: products[id],
  });
});

module.exports = productRouter;
