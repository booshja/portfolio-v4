import type { Mongoose } from "mongoose";

namespace NodeJS {
    interface ProcessEnv {
        DB_USERNAME: string;
        DB_PASSWORD: string;
        DB_SUBDOMAIN: string;
        DB_NAME: string;
        DB_APP_NAME: string;
    }
}

declare global {
    var mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    };
}
