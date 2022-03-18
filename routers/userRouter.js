const router = require("express").Router();
const {
  register,
  login,
  activeAccountController,
  findMail,
  recoverPassword,
} = require("../controllers/userController");

router.post("/register", register);
router.post("/login", login);
router.post("/active", activeAccountController);
router.post("/findmail", findMail);
router.post("/recoverpass", recoverPassword);

module.exports = router;
