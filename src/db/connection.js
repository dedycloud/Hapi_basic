import { createConnection as connect } from 'typeorm';
import entities from "./entities";

const createConnection = async () => {
    const connection = await connect({
        type: process.env.DB_DRIVER || "mysql",
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USERNAME || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "hapi_db",
        synchronize: process.env.DB_SYNC === "true" || true,
        logging: process.env.DB_LOGGING === "true" || true,
        entities: Object.values(entities)
    });
    return connection;
}

export default createConnection;