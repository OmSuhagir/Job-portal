import { Job } from "../models/job.model.js"

export const postJob = async (req, res) => {
    try {
        const { title,
            description,
            requirements,
            location,
            salary,
            companyId,
            position,
            experience,
            jobType
        } = req.body;

        const userId = req.id;
        if (!title || !description || !requirements || !location || !salary ||
            !companyId || !position || !jobType || !experience
        ) {
            return res.status(404).json({
                message: "Please fill all the feilds",
            })
        }
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(','),
            salary: Number(req.body.salary),
            location,
            jobType: jobType, 
            position,
            company: companyId,
            experience: experience,     
            created_by: userId,
        });
        
        return res.status(201).json({
            message: "Job Posted successfully",
            status: true,
            job
        })

    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: "some error occured",
            success: false
        });
    }
}

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
                { requirements: { $regex: keyword, $options: "i" } },
                { location: { $regex: keyword, $options: "i" } },
                { jobtype: { $regex: keyword, $options: "i" } },
                { position: { $regex: keyword, $options: "i" } }
            ]
        }

        const jobs = await Job.find(query).populate({
            path:"company",
        }).sort({createdAt: -1});

        if (jobs.length === 0) {
            return res.status(404).json({ message: "No Jobs available" });
        }

        return res.status(200).json({ jobs });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Some error occurred",
            success: false
        });
    }
}

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false
            });
        }
        return res.status(200).json({
            job
        });
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: "some error occured",
            success: false
        });
    }
}

export const getAdminJob = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found",
                success: false
            });
        }
        return res.status(200).json({
            jobs,
            success: true
        });
    } catch (err) {
        return res.status(404).json({
            message: "server Error",
            success: false
        });
    }
}