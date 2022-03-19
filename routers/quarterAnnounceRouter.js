const router = require("express").Router();
const {
  addQuarterAnnounce,
  updateAnnounce,
  getQuarterAnnounce,
} = require("../controllers/quarterAnnounceController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, addQuarterAnnounce);
router.get("/update", authenticate, updateAnnounce);
router.get("/get", authenticate, getQuarterAnnounce);

module.exports = router;
