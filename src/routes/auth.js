const express = require("express");

const { register, resendVerification, verify } = require("../controllers/auth");

const router = express.Router();

router.post("/register", register);
router.post("/resend-verification", resendVerification);
router.get("/verify/:verificationToken", verify);

module.exports = router;
