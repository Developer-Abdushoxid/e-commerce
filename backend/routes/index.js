import express from "express";
import userSignUpController from "../controller/userSignUp.js"
import userSignInController from "../controller/userSignIn.js";


const router = express.Router();

router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)



export default router;