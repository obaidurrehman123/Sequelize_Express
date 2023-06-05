const { Router } = require("express");
const router = Router();

const {
  addUser,
  getAllusers,
  getSingleUser,
} = require("../controllers/userController");

router.post("/addUser", addUser);
router.get("/getAllUsers", getAllusers);
router.get("/getSingleUser/:id", getSingleUser);
module.exports = router;
