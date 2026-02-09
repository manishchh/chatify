import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { ENV } from "../lib/env.js";    



export const socketAuthMiddleware = async (socket, next) => {
    try {
        const token = socket.handshake.headers.cookie
            ?.split(";")
            .find((row) => row.startsWith("jwt=")) 
            ?.split("=")[1];
        
        if (!token) {
            console.log("Socket authentication failed: No token provided");
            return next(new Error("Unauthorized - Invalid token"));
        }

        //verify token
        const decoded = jwt.verify(token, ENV.JWT_SECRET);
        if (!decoded) {
            console.log("Socket authentication failed: Invalid token");
            return next(new Error("Unauthorized - Invalid token"));
        }

        //find user fromdb
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            console.log("Socket authentication failed: User not found");
            return next(new Error("Unauthorized - User not found"));
        }
        //attach user info to socket object 
        socket.user = user; //attach user to socket object for later use
        socket.userId = user._id.toString(); //attach userId for easier access in socket handlers

        console.log(`Socket authenticated successfully for user: ${user.fullName} (${user._id})`);
        next(); //proceed to next middleware or socket handler

    } catch (error) {
        console.log("Socket authentication error:", error.message);
        next(new Error("Unauthorized - Authentication failed"));
    }
};
