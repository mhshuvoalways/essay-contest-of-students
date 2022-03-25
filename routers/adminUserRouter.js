const router = require("express").Router();
const {
  register,
  login,
  activeAccountController,
  findMail,
  recoverPassword,
  getAllUser,
  judgeApprove,
  deleteUserJudge,
} = require("../controllers/adminUserController");
const authenticate = require("../middlewares/authenticate");

router.post("/register", register);
router.post("/login", login);
router.post("/active", activeAccountController);
router.post("/findmail", findMail);
router.post("/recoverpass", recoverPassword);
router.get("/alluser", authenticate, getAllUser);
router.put("/approve/:id", authenticate, judgeApprove);
router.delete("/delete/:id", authenticate, deleteUserJudge);

module.exports = router;
