const router = require("express").Router();
const {
  register,
  login,
  activeAccountController,
  findMail,
  recoverPassword,
  getMe,
  getAllUser,
} = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", register);
router.post("/login", login);
router.post("/active", activeAccountController);
router.post("/findmail", findMail);
router.post("/recoverpass", recoverPassword);
router.get("/getme", authenticate, getMe);
router.get("/getalluser", authenticate, getAllUser);

module.exports = router;
