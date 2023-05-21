const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/auth.controller");

const router = require("express").Router();

router.post("/auth/register", registerController);
router.post("/auth/login", loginController);
router.post("/auth/logout", logoutController);

module.exports = router;
