import express from "express";
import {getAdminJob, getJobById, getAllJobs, postJob } from "../controllers/job.controller.js";
import authenticatedToken from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(authenticatedToken, postJob);
router.route("/getadminjobs").get(authenticatedToken, getAdminJob);
router.route("/get").get(authenticatedToken, getAllJobs);
router.route("/get/:id").get(authenticatedToken, getJobById);

export default router;