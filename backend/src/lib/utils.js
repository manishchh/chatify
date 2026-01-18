import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
    const { JWT_SECRET } = ENV;
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not configured");
    }
    const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // milliseconds
        httpOnly: true, // prevent xss attack
        sameSite: "strict", // CSRF protection
        secure: ENV.NODE_ENV === "development" ? false : true, // only send cookie over https in production
    });

    return token;
};
