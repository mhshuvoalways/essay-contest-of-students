const router = require("express").Router();
const {
  addGrade,
  getGrade,
  updateGrade,
  deleteGrade
} = require("../controllers/gradeController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, addGrade);
router.get("/get", authenticate, getGrade);
router.put("/update/:id", authenticate, updateGrade);
router.delete("/delete/:id", authenticate, deleteGrade);

module.exports = router;
