import {getRepository} from "typeorm";
import Login from "../models/login.model";
import bcrypt  from 'bcryptjs';
import Boom from '@hapi/boom'

export default class LoginService {

    loginRepository() {
        return getRepository(Login);
    }
    async beforeCreate(password){
    const salt = bcrypt.genSaltSync();
    return  bcrypt.hashSync(password,salt)
    }

    async validPassword(password,checkPassword){
        return  bcrypt.compareSync(password,checkPassword)
    }
    // async seacrh(payload){
    //     if(payload.email){
    //         return this.findByemail(payload.email);
    //     }else if(payload.fullname) {
    //         return this.locationRepository().findOne({fullname:payload.fullname});
    //     }
    // }

    async updatePassword(data){
        const id =`${data.id}`;
        let datanya = this.loginRepository().findOne(id) ;
        if(datanya){
            const {password} = data;
            data.password = await this.beforeCreate(password);
            return this.loginRepository().save(data);
        }
    }
    async createPassword(data){
        const {password} = data;
        data.password = await this.beforeCreate(password);
        return this.loginRepository().save(data);
    }

    async findByUsername(username){
        return await this.loginRepository().findOne({username});
    }

    async login(data){
        const {username,password}=data;
        const user = await this.findByUsername(username);
        if (user && await this.validPassword(password,user.password)){
            return user;
        }else {
            throw Boom.unauthorized('Invalid Username or Password')
        }
    }
}