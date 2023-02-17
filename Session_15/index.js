const path = require("path");
const hbs = require("hbs");

const getProducts = require("./products");
const express = require("express");
const app = express();

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "views", "partials"));
hbs.registerHelper('orignalprice',function(percantage,price){

  return (price/(1-(percantage/100))).toFixed(0)

})
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/products", async(req, res) => {


  const products = await getProducts();
  // console.log(products);
 


  res.render("products",{data: products.products});
});