require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");

const userRouter = require("./routers/userRouter");
const adminUserRouter = require("./routers/adminUserRouter");
const articleRouter = require("./routers/articleRouter");
const quarterAnnounceRouter = require("./routers/quarterAnnounceRouter");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/adminuser", adminUserRouter);
app.use("/article", articleRouter);
app.use("/quarterannounce", quarterAnnounceRouter);

app.get("/", (req, res) => {
  res.send("A MERN stack monomousumicontest website");
});

db(app);
