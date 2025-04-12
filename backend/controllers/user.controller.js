import { User } from "../models/user.model.js";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;



        if (!fullname || !email || !phoneNumber || !password || !role) {


            return res.status(404).json({
                message: "Required Field Missing",
                success: false,
            });
        }

        let user = await User.findOne({ email });
        if (user) {
            return res.status(404).json({
                message: "Email already Exist",
                success: false,
            });
        }

        // convert Password to #
        const hashPass = await bycrypt.hash(password, 10);

        const newUser = new User({
            fullname,
            email,
            phoneNumber,
            password: hashPass,
            role,
        })

        await newUser.save();

        return res.status(200).json({
            message: "Account Created Successfully",
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: "Server Error registering user",
            success: false,
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        if (!email || !password || !role) {
            return res.status(404).json({
                message: "Required Field Missing",
                success: false,
            });
        }
        // check user email 
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Incorrect User name or Password",
                success: false,
            });
        }

        // check user password
        const isMatch = await bycrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(404).json({
                message: "Incorrect User name or Password",
                success: false,
            });
        }

        //check user role
        if (user.role !== role) {
            return res.status(404).json({
                message: "You dont have the role to access this resource",
                success: false,
            });
        }

        // Token Generation
        const tokenData = {
            userId: user._id,
        };

        const token = await jwt.sign(tokenData, "123123", {
            expiresIn: "1d",
        });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }

        return res.status(200).cookie("token", token, {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "Strict",
        }).json({
            message: `Welcome Back ${user.fullname}`,
            user,
            success: true,
        });

    } catch (err) {
        console.log(err);
        res.status(404).json({
            message: "Server Error (login failed)",
            success: false,
        })
    }
}

export const logout = (req, res) => {
    try {
        return res.status(200).cookie("token", "", {
            maxAge: 0
        }).json({
            message: "Loged Out Successfully",
            success: true,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error (logout failed) ",
            success: false,
        })
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.files;

        // cloudinary Upload

        let skillsArr;
        if (skills) {
            const skillsArr = skills.split(',');
        }

        const userId = req.id; // from middleware auth
        let user = await User.findById(userId);
        if (!user) {
            res.status(404).json({
                message: "User not found ",
                success: false,
            })
        }

        // update Database
        if (fullname) {
            user.fullname = fullname;
        }
        if (email) {
            user.email = email;
        }
        if (phoneNumber) {
            user.phoneNumber = phoneNumber;
        }
        if (bio) {
            user.profile.bio = bio;
        }
        if (skills) {
            user.profile.skills = skillsArr;
        }




        // resume

        await user.save();
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
        }

        res.status(200).json({
            message: "User Updated Successfully ",
            success: true,
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server Error updating user ",
            success: false,
        })
    }
} 