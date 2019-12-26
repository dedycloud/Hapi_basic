import {EntitySchema} from "typeorm";
import Location from "../models/location.model";

const LocationSchema = new EntitySchema({
    name:"Location",
    target:Location,
    tableName:"location",
    columns:{
        id:{
            primary:true,
            type:"uuid",
            generated:"uuid",
            nullable:false
        },
        name:{
            type: "varchar",
            nullable:false
        },
        address: {
            type: "varchar",
            nullable: false
        }
    },
    relations:{
        transition:{
            target:"Transition",
            type:"one-to-many",
            inverseSide:"location",
            joinColumn:true,
            cascade:true,
            eager:false
        },
        package:{
            target:"Package",
            type:"one-to-many",
            inverseSide:"location",
            joinColumn:true,
            cascade:true,
            eager:false
        }
    }
})
export default LocationSchema;