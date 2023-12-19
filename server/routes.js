const express = require("express");
const authController = require("./authController");
const authMiddleware = require("./authMiddleware");

const requireAuth = require("./authMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

// Protected routes

router.get("/profile", requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, "Patient profile", "profile.html"));
});

router.get("/patientdashboard", requireAuth, (req, res) => {
  res.sendFile(
    path.join(__dirname, "Patient profile", "patientdashboard.html")
  );
});
module.exports = router;
