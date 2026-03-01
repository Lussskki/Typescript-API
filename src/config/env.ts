import dotenv from "dotenv";


dotenv.config();

export const  env = {
    PORT: Number(process.env.PORT ?? 3000)
};

export const  db = {
     MONGO_URI: process.env.MONGO_URI || "mongodb://127.0.0.1:27017/local"
};