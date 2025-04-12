import Company from "../models/company.model.js"


export const registerCompany = async (req, res) => {
    try {
        const { name} = req.body;
        if (!name) {
            return res.status(404).json({
                message: "Company Name is Required"
            })
        }
        let company = await Company.findOne({ name: name });

        if (company) {
            return res.status(400).json({
                message: "Company already Register"
            })
        }

        company = await Company.create({
            name: name,
            userId: req.id,
        });
        return res.status(201).json({
            message: "Company Registered successfully",
            company,
            success: true,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getAllCompanies = async (req, res) => {
    try {
        const userId = req.id;
        const companies = await Company.find({ userId })
        if(!companies){
            return res.status(404).json({
                message: "Company not found"
            })
        }
        return res.status(200).json({companies})
    } catch (err) {
        console.log(err);
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if(!company){
            return res.status(404).json({
                message: "Company not found"
            })
        }
        res.status(201).json({company, success: true});
    } catch (err) {
        console.log(err);
    }
}

export const updateCompany = async (req, res) => {
    try {
        const {name, description, website, location} = req.body;
        const file = req.file;
        // cloudinary

        const updateData = {name, description, website, location}
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        })
        if(!company){
            return res.status(404).json({
                message: "Company not found"
            })
        }
        return res.status(200).json({
            message: "Company updated"
        })
    } catch (err) {
        console.log(err);
    }
}