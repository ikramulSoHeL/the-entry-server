const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

module.exports = router;
