const router = require("express").Router();
const { getIsPaySubmit } = require("../controllers/isPaySubmitController");
const authenticate = require("../middlewares/authenticate");

router.get("/get", authenticate, getIsPaySubmit);

module.exports = router;
