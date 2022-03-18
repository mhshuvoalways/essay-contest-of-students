const User = require("../Model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const serverError = require("../utils/serverError");
const {
  registerValidation,
  loginValidation,
  findMailValidation,
  recoverPassValidation,
} = require("../validations/userValidation");
const transporter = require("../mail/transporter");
const { recoverPass, activeAccount } = require("../mail/templates");

const register = (req, res) => {
  const { email, name, phone, country, age, password, recaptch } = req.body;
  const validation = registerValidation({
    email,
    name,
    phone,
    country,
    age,
    password,
    recaptch,
  });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (!response) {
          bcrypt.hash(password, 10, function (err, hash) {
            if (err) {
              serverError(res);
            } else {
              const token = jwt.sign(
                {
                  email,
                  name,
                },
                process.env.SECRET,
                { expiresIn: "1h" }
              );
              transporter(email, activeAccount, name, token);
              const user = {
                email,
                name,
                password: hash,
                phone,
                country,
                age,
              };
              new User(user)
                .save()
                .then((response) => {
                  res.status(200).json({
                    message: "Check your mail and active your account!",
                    response,
                  });
                })
                .catch(() => {
                  serverError(res);
                });
            }
          });
        } else {
          res.status(400).json({
            message: "User already exists!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const login = (req, res) => {
  const { email, password } = req.body;
  const validation = loginValidation({ email, password });
  if (validation.isValid) {
    User.findOne({ email })
      .then((response) => {
        if (response) {
          if (response.isActive) {
            bcrypt.compare(password, response.password, function (err, result) {
              if (result) {
                const token = jwt.sign(
                  {
                    _id: response._id,
                    email: response.email,
                    name: response.name,
                  },
                  process.env.SECRET,
                  { expiresIn: "1h" }
                );
                res.status(200).json({
                  message: "Welcome!",
                  token,
                });
              } else {
                res.status(400).json({
                  message: "Password doesn't match!",
                });
              }
              if (err) {
                serverError(res);
              }
            });
          } else {
            res.status(400).json({
              message: "Please active your account and try again",
            });
          }
        } else {
          res.status(400).json({
            message: "User not found!",
          });
        }
      })
      .catch(() => {
        serverError(res);
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const activeAccountController = (req, res) => {
  const { token } = req.body;
  try {
    const decode = jwt.verify(token, process.env.SECRET);
    User.findOneAndUpdate(
      { email: decode.email },
      {
        isActive: true,
      },
      { new: true }
    )
      .then(() => {
        res
          .status(200)
          .json({ message: "Thanks for Activating your account!" });
      })
      .catch(() => {
        serverError(res);
      });
  } catch {
    res.status(400).json({
      message: "Something is wrong!",
    });
  }
};

const findMail = (req, res) => {
  const { email } = req.body;
  const validation = findMailValidation(email);
  if (validation.isValid) {
    User.find()
      .select("-password")
      .then((response) => {
        const findMail = response.find((el) => el.email === email);
        const token = jwt.sign(
          {
            _id: findMail._id,
            email: findMail.email,
            name: findMail.name,
          },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        if (findMail) {
          transporter(email, recoverPass, findMail.name, token);
          res.status(200).json(findMail);
        } else {
          res.status(400).json({
            message: "User not found!",
          });
        }
      })
      .catch(() => {
        res.status(400).json({
          message: "Something is wrong!",
        });
      });
  } else {
    res.status(400).json(validation.error);
  }
};

const recoverPassword = (req, res) => {
  const { token, password } = req.body;
  const validation = recoverPassValidation(password);
  if (validation.isValid) {
    jwt.verify(token, process.env.SECRET, function (err, decode) {
      if (decode) {
        User.findOne({ _id: decode._id })
          .then(() => {
            bcrypt.hash(password, 10, function (err, hash) {
              if (hash) {
                const updateWithPass = {
                  password: hash,
                };
                User.findOneAndUpdate({ _id: decode._id }, updateWithPass, {
                  new: true,
                })
                  .select("-password")
                  .then(() => {
                    res.status(200).json({
                      token,
                      message: "Welcome!",
                    });
                  })
                  .catch(() => {
                    serverError(res);
                  });
              } else if (err) {
                serverError(res);
              }
            });
          })
          .catch(() => {
            serverError(res);
          });
      } else if (err) {
        res.status(400).json({
          message: "Something is wrong!",
        });
      }
    });
  } else {
    res.status(400).json(validation.error);
  }
};

module.exports = {
  register,
  login,
  activeAccountController,
  findMail,
  recoverPassword,
};
