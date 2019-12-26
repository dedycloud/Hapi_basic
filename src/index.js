import createConnection from './db/connection';
import Hapi from '@hapi/hapi'
import routes from './routes'
import configure from "./config";

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
export default async () => {
    configure();
    const connection = await createConnection();
    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    });
   server.route(routes);

    if (connection.isConnected) {

        console.log('DATABASE CONNECTED');
        await server.start();
        console.log(`DB connection name ${connection.name}`);
        console.log('Server ', process.env.APP_NAME, ' running on ', server.info.uri)
    }

    return server.listener;
}


