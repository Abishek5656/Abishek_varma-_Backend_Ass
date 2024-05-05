import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  changeCurrentPassword,
  getCurrentUser,
  updateAccountDetails,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/authmiddleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.use(verifyJWT);

router.route("/logout").post(logoutUser);

router.route("/change-password").post(changeCurrentPassword);

router.route("/current-user").get(getCurrentUser);

router.route("/update-account").patch(updateAccountDetails);

export default router;
