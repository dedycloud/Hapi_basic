import request from 'supertest'
import init from '../../index'
import LocationService from "../../services/location.service";


const locationService = new LocationService();

describe('Location route', () => {
    let app;
    beforeEach(async () => {
        app = await init();
    });
    it('should /GET ', async ()=> {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            statusCode: 2090,
            message: 'hello word',
        })
    });

    afterEach(async () => {
        if(app){
            app.close();
        }
    });
})


describe('Login routes ', () => {
    let app;

    it('should login GET /Login', async ()=> {

    });

    afterEach(async () => {
        if(app){
            app.close();
        }
    });
})