const router = require("express").Router();
const {
  postArticle,
  getArticle,
  getMyArticle,
} = require("../controllers/articleController");
const authenticate = require("../middlewares/authenticate");

router.post("/postarticle", authenticate, postArticle);
router.get("/getarticles", getArticle);
router.get("/getmyarticles", authenticate, getMyArticle);

module.exports = router;
