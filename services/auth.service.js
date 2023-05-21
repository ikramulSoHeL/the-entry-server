require("dotenv").config();

const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const User = require("../models/user/user.model");

const RegisterService = async (data) => {
  try {
    const { email, username, password } = data;

    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      email: email,
      username: username,
      password: hashedPassword,
    });
    await newUser.save();

    return {
      message: "User registered successfully",
      data: newUser,
    };
  } catch (err) {
    throw new Error(err);
  }
};

const LoginService = async (data) => {
  try {
    const { username, password } = data;

    const user = await User.findOne({ username: username });

    if (!user) {
      throw new Error("User does not exist");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return {
        message: "Password is incorrect",
        status: 401,
      };
    }

    const payload = {
      user: user,
    };

    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY);
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "100d",
    });

    user.refreshToken = refreshToken;
    await user.save();

    return {
      message: "User logged in successfully",
      data: {
        user: user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
      status: 200,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const logoutService = async (data) => {
  try {
    const { refreshToken } = data;

    var { user } = jwt.verify(refreshToken, process.env.SECRET_KEY);
    user = await User.findOne({
      username: user.username,
    });

    if (!user) {
      throw new Error("User does not exist");
    }

    user.refreshToken = null;
    await user.save();

    return {
      message: "User logged out successfully",
      status: 200,
      user: user,
    };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  RegisterService,
  LoginService,
  logoutService,
};
