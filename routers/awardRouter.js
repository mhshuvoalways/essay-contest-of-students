const router = require("express").Router();
const { giveAwards, getAwards, getAllAwards } = require("../controllers/awardController");
const authenticate = require("../middlewares/authenticate");

router.post("/add", authenticate, giveAwards);
router.get("/getall", authenticate, getAllAwards);
router.get("/get", authenticate, getAwards);

module.exports = router;
