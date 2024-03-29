const express = require("express");
const router = express.Router();
const usersRouter = require("./users");
const animalsRouter = require("./animals");
const authRouter = require("./auth");

// http://localhost:3001/api/
router.get("/", (req, res) => {
  res.json({ msg: "hello!" });
});
// // http://localhost:3001/api/animals
// router.get("/animals", (req, res) => {
//   res.json(["dog", "unicorn", "dragon", "bigfoot", "rahno"]);
// });

//http://localhost:3001/api/users
router.use("/users", usersRouter);

//http://localhost:3001/api/animals
router.use("/animals", animalsRouter);

//http://localhost:3001/api/auth
router.use("/auth", authRouter);

module.exports = router;