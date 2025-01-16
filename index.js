const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const path = require("path");
const cparser = require("cookie-parser");
const routeUsers = require("./routes/route-users");
const routeRestaurants = require("./routes/route-restaurants");
const routeCouriers = require("./routes/route-couriers");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(cparser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(routeUsers);
app.use(routeRestaurants);
app.use(routeCouriers)

app.listen(PORT, () => {
    console.log("App listening at: http://localhost:8080/")
})