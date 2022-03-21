const router = require("express").Router();
const {
  postArticle,
  getArticle,
  getMyArticle,
  updateArticle,
  deleteArticle,
  getIndividualActicle,
} = require("../controllers/articleController");
const authenticate = require("../middlewares/authenticate");

router.post("/postarticle", authenticate, postArticle);
router.get("/getarticles", authenticate, getArticle);
router.get("/getmyarticles", authenticate, getMyArticle);
router.put("/update/:id", authenticate, updateArticle);
router.delete("/delete/:id", authenticate, deleteArticle);
router.get("/getarticle/:id", authenticate, getIndividualActicle);

module.exports = router;
