const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;  // attach user to request
        next();

    } catch (error) {
        return res.status(401).json({ message: "Not authorized" });
    }
};

module.exports = protect;
exports.checkAuth = (req, res) => {
  res.status(200).json({ message: "Authorized", user: req.user });
};