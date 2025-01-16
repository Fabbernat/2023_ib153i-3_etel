const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {secret, userAuth} = require("../config/auth");
const bcrypt = require("bcryptjs");
const EmailManager = require("../service/email-manager");
const AddressDao = require("../dao/address-dao");
const OrderDao = require("../dao/order-dao");
const RestaurantDao = require("../dao/restaurant-dao");
const UserDao = require("../dao/user-dao");
const ComplexDao = require("../dao/complex-dao");


router.get("/availableorders", async (req, res) => {
    const token = req.cookies.jwt;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const courier = await new UserDao().getUserByUsername(username);
    if (courier.role !== "ROLE_COURIER") {
        return res.redirect("/");
    }

    const available = await new ComplexDao().getAvailableOrders();

    return res.render("availableorders", {
        username: username,
        role: courier.role,
        availableorders: available
    });
});


router.get("/acceptorder/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const orderid = req.params.id;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const courier = await new UserDao().getUserByUsername(username);
    if (courier.role !== "ROLE_COURIER") {
        return res.redirect("/");
    }

    await new OrderDao().updateOrderCourier(orderid, username);

    return res.redirect("/order/" + orderid);
});


router.get("/orders/:id/complete", async (req, res) => {
    const token = req.cookies.jwt;
    const orderid = req.params.id;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const courier = await new UserDao().getUserByUsername(username);
    if (courier.role !== "ROLE_COURIER") {
        return res.redirect("/");
    }

    await new OrderDao().updateOrderStatus(orderid, "complete");

    return res.redirect("/availableorders");
});

module.exports = router;