import {getRepository} from "typeorm";
import Boom from "@hapi/boom"

import Location from "../models/location.model";
const Bcrypt = require('bcryptjs');
class LocationService {


    locationRepository() {
        return getRepository(Location);
    }
    async createLocation(location){
        return await this.locationRepository().save(location)
    }

    async updateLocation(location){
        console.log(location);
       let locationToUpdate = await this.findLocationById(location.id);
       this.locationRepository().merge( locationToUpdate,location)
        return await this.locationRepository().save(locationToUpdate)
    }

    async findLocationById(id){
        let location = await this.locationRepository().findOne(id)
        if (!location) throw   Boom.notFound('customer not found');
        return location;
    }
    async findAllLocation(){
        return await this.locationRepository().find();
    }
    async deleteLocation(id){
        let location = await this.findLocationById(id)
        return await this.locationRepository().delete(location)
    }

    // async beforeCreate(password){
   // const salt = bcrypt.genSaltSync();
    // return await bcrypt.hashSync(password,salt)
    // }
    //
    // async validPassword(password,checkPassword){
    //     return await bcrypt.compareSync(password,checkPassword)
    // }
    // async seacrh(payload){
    //     if(payload.email){
    //         return this.findByemail(payload.email);
    //     }else if(payload.fullname) {
    //         return this.locationRepository().findOne({fullname:payload.fullname});
    //     }
    // }
    // async updatePassword(data){
    //     const id =`${data.id}`;
    //     let datanya = this.locationRepository().findOne(id) ;
    //     if(datanya){
    //         const {password} = data;
    //         data.password = await this.beforeCreate(password);
    //         return this.locationRepository().save(data);
    //     }
    // }
    // async createPassword(data){
    //     const {password} = data;
    //     data.password = await this.beforeCreate(password);
    //     return this.locationRepository().save(data);
    // }
}

export default LocationService;