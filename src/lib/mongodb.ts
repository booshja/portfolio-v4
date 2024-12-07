import mongoose, { type Mongoose } from "mongoose";

export const connectDB = async () => {
    const dbUri = getURI();
    let cached = global.mongoose;

    if (!cached) {
        cached = global.mongoose = { conn: null, promise: null };
    }

    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(dbUri).then((mongoose: Mongoose) => {
            console.log("DB connected!");
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};

const getURI = () => {
    const { DB_APP_NAME, DB_NAME, DB_PASSWORD, DB_SUBDOMAIN, DB_USERNAME } =
        process.env;

    if (!DB_APP_NAME || !DB_PASSWORD || !DB_SUBDOMAIN || !DB_USERNAME || !DB_NAME) {
        throw new Error("MongoDB environment variables not set");
    }

    const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_SUBDOMAIN}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=${DB_APP_NAME}`;

    return uri;
};
