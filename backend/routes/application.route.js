import express from "express";
import authenticatedToken from "../middleware/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

router.route("/apply/:id").get(authenticatedToken, applyJob);
router.route("/:id/applicants").get(authenticatedToken, getApplicants);
router.route("/get").get(authenticatedToken, getAppliedJobs);
router.route("/status/:id/update").post(authenticatedToken, updateStatus);

export default router;