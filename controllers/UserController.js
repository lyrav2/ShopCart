const express = require('express');
const router = express.Router();

const userService = require("../services/UserService.js");

router.get("/:id", userService.getUser);
router.post("/register", userService.createUser);
router.delete("/:id", userService.deleteUser);

module.exports = router;