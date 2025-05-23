import { Application } from '../models/application.model.js'
import { Job } from '../models/job.model.js';

export const applyJob = async (req, res) => {
    try {
        const userId = req.id;
        const jobId = req.params.id;

        console.log("Job ID = "+jobId);

        if (!jobId) {
            return res.status(404).json({
                message: "Id Not Found",
                success: false,
            })
        }

        const existingApplication = await Application.findOne({
            job: jobId,
            applicant: userId,
        })

        if (existingApplication) {
            return res.status(404).json({
                message: "Application already exist",
                success: false,
            })
        }

        const job = await Job.findById(jobId);
      
        if (!job) {
            return res.status(404).json({
                message: "Job Not Found",
                success: false,
            })
        }
        // create new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId,
        });

        job.application.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Application submitted",
            success: true,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "server error",
            success: false,
        })
    }
}


export const getAppliedJobs = async (req, res) => {
    try {
        const userId = req.id;
        const application = await Application.find({ applicant: userId }).sort({ createdAt: -1 })
            .populate({
                path: 'job',
                options: { sort: { createdAt: -1 } },
                populate: { path: "company", options: { sort: { createdAt: -1 } } }
            });
        if (!application) {
            return res.status(400).json({
                message: "Application not found",
                success: false,
            })
        }

        return res.status(200).json({
            application,
            success: true
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "server error",
            success: false,
        })
    }
}

export const getApplicants = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById( jobId ).populate({
            path: 'application',
                options: { sort: { createdAt: -1 } },
                populate: { path: "applicant", options: { sort: { createdAt: -1 } } }
        });

        if(!job) {
            return res.status(400).json({
                message: "Job not found",
                success: false,
            })
        }
        return res.status(200).json({
            job,
            success: true,
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "server error",
            success: false,
        })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;

        if(!status) {
            return res.status(404).json({
                message: "Invalid Status",
                success: false,
            })
        }

        // find application by applicant id
        const application = await Application.findById({_id: applicationId});
        if(!application) {
            return res.status(404).json({
                message: "Application not found",
                success: false,
            })
        }

        // update status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message: "Application Status Updated", 
            success: true
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "server error",
            success: false,
        })
    }
}