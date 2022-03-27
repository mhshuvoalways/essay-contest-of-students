const router = require("express").Router();
const {
  giveAuthor,
  getAllAuthor,
  getMyAuthor,
} = require("../controllers/authorController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, giveAuthor);
router.get("/getall", authenticate, getAllAuthor);
router.get("/get", authenticate, getMyAuthor);

module.exports = router;
