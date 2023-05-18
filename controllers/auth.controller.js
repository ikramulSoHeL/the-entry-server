const AuthServices = require("../services/auth.service");

const registerController = async (req, res) => {
  AuthServices.RegisterService(req.body)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "User registered successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when registering user",
      });
    });
};

const loginController = async (req, res) => {
  AuthServices.LoginService(req.body)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "User logged in successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when logging in user",
      });
    });
};

const logoutController = async (req, res) => {
  AuthServices.logoutService(req.body)
    .then((data) => {
      return res.status(data?.status || 200).send({
        data: data?.data || null,
        message: data?.message || "User logged out successfully",
      });
    })
    .catch((error) => {
      return res.status(error?.status || 400).send({
        message: error?.message || "Something went wrong when logging out user",
      });
    });
};

module.exports = {
  registerController,
  loginController,
  logoutController,
};
