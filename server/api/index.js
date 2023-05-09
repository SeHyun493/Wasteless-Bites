const router = require("express").Router();
module.exports = router;

router.use("/ads", require("./ads"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
