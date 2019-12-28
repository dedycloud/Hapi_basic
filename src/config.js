import dotenv from 'dotenv';
import {dirname, resolve, join} from 'path';

export default function configure(){
    if(process.env.NODE_ENV === 'test') {
        console.log("DB TEST");
        dotenv.config({path:resolve("test.env")});
    }else{
        console.log("DB run")
        dotenv.config();
    }

    if(!process.env.APP_NAME) {
        console.error('Environment file (.env) not found in folder');
        process.exit(1);
    }
    process.env.BASE_PATH = dirname(resolve('index.js'));
}