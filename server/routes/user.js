const express = require("express");
const { basic, signUp, singin } = require("../controllers/userCtrl");

const router = express.Router();

router.get("/", basic);

router.post("/user/signup", signUp);

router.post("/user/signin", singin);

module.exports = router;
