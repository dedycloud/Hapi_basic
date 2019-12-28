import request from 'supertest'
import init from '../../index'
import LocationService from "../../services/location.service";
import LoginService from "../../services/login.service";

const locationService = new LocationService();
const loginService = new LoginService();
const payload = {
    username: "dedy",
    password: "dedy"
}
let app;
describe('Location route', () => {

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

    // beforeEach(async () => {
    //     app = await init();
    // });
    it('should login GET /Login', async ()=> {
        // payload.forEach(async (e)=>{
        //     await loginService.createPassword(e);
        // });
     const savedLogin=await loginService.createPassword(payload)
        const res = await request(app).get(`/login/${savedLogin.username}`).auth('dedy','dedy');
     const actual = await loginService.findByUsername(savedLogin.username);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
            actual
        )
    });
    afterEach(async () => {
        if(app){
            app.close();
        }
    });
})