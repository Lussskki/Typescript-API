import rateLimit from "express-rate-limit";

export const authLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 5,
    standardHeaders:true,
    legacyHeaders:false,
    message: {message: "To many login attemps. Try again later"}
});

export const apiLimiter =  rateLimit({
    windowMs: 60 * 1000, // 1 min
    max: 100,
    standardHeaders:true,
    legacyHeaders:false,
    message: {message: "Too many requests. Slow down."}
});