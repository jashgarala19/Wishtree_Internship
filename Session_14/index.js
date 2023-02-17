const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const fs = require("fs");

app.use(express.static('.'))  
app.set("view engine", "hbs");
// console.log(__dirname);
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// const data = fs.readFileSync(path.join(__dirname,'views',''))

// const data = readSync('header.hbs')
hbs.registerPartial("my_partial", "{{fname}} {{lname}}");



hbs.registerHelper('get_link',function(d){


  return `/products/${d}`
})
//Use these below code if your folder name is v or any other than views
// app.set('views', path.join(__dirname, 'v'))


const products = {
  products: [
    { product_name: "bag", product_price: 100 },
    { product_name: "car", product_price: 3000 },
    { product_name: "mobile", product_price: 20 },
 
  ],
}
app.get("", (req, res) => {
  res.render("home");
});

app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/products", (req, res) => {
  res.render("products", products);
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/products/:pName", (req, res) => {
  const {pName} = req.params;
  // console.log(pName);
  
const data = products.products.find((e)=>e.product_name===pName)



  res.render("details",{p:data});
});

app.listen(8000, () => {
  console.log("Listening to port 8000");
});
