import LocationService from "../../services/location.service";
import init from '../../index'

const locationService = new LocationService();
const dataLocation = {
    name: "dedyss",
    address: "jl.abdurahman"
}
const dataLocations =[ {
    name: "dedy",
    address: "jl.abdurahman"
}, {
    name: "dedys",
    address: "jl.abdurahman"
}]
describe('find location',  () => {
    let server;
    beforeEach(async () => {
        server = await init();
        await locationService.locationRepository().query('SET FOREIGN_KEY_CHECKS=0')
        await locationService.locationRepository().clear();
        await locationService.locationRepository().query('SET FOREIGN_KEY_CHECKS=1')

    });

    it('should return location', async () => {
        const  {id,name} = await locationService.locationRepository().save(dataLocation);
        const location = await locationService.findLocationById(id);
        expect(location).toMatchObject({
            id,
            name
        })
    });
    it('should return location save', async () => {
        let saveLocation=[];
        for (let i = 0; i < dataLocations.length ; i++) {
            saveLocation.push(await locationService.locationRepository().save(dataLocations[i]))
        }
        const location = await locationService.findAllLocation();
        expect(location).toHaveLength(saveLocation.length);
    });
});