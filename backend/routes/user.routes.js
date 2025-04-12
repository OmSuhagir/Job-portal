import express from "express";
import {singleUpload} from "../middleware/multer.js"
import { register, login, updateProfile, logout } from "../controllers/user.controller.js";
import authenticatedToken from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/profile/update").post(authenticatedToken, updateProfile);
router.route("/logout").post(logout);

export default router;