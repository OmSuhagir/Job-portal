import jwt from "jsonwebtoken"

const authenticatedToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = await jwt.verify(token, "123123");
        if (!decoded) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.id = decoded.userId;
        next(); // pass control to next middleware
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

export default authenticatedToken;
