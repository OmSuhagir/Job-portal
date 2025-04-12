import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';
import connectDB from './utils/db.js';
import companyRoute from './routes/company.route.js'
import userRoute from './routes/user.routes.js';
import jobRoute from "./routes/job.route.js"
import applicationRoute from './routes/application.route.js'


const app = express();

// API
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Welcome to API",
        timestamp: new Date().toISOString(),
        success: true,
    });
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOption = {
    origin: ['http://localhost:5173'],
    credentials: true,
};
app.use(cors(corsOption));

// API's
app.use("/api/users", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);


// connections 
const PORT = process.env.PORT || 5011;
connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})