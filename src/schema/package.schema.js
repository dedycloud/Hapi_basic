import {EntitySchema} from "typeorm";
import Package from "../models/package.model";

const PackageSchema = new EntitySchema({
    name :"Package",
    target:Package,
    tableName:"package",
    columns:{
        id:{
            primary:true,
            type:"uuid",
            generated:"uuid"
        },
        regNumber:{
            type: "int",
            unique:true,
            nullable:false
        },
        // originLocation:{
        //   type:"varchar",
        //   nullable: false
        // },
        // destinationLocation:{
        //     type:"varchar",
        //     nullable:false
        // },
        weight:{
            type:"int",
            nullable:false
        },
        cost:{
            type:"integer",
            nullable:false
        }
    },
    relations:{
        originLocation:{
            target:"Location",
            type:"many-to-one",
            joinColumn:true,
            eager:true
        },
        destinationLocation:{
            target:"Location",
            type:"many-to-one",
            joinColumn:true,
            eager:true
        },
        transition:{
            target:"Transition",
            type:"one-to-many",
            inverseSide:"packageItem",
            joinColumn:true,
            cascade:true,
            eager:true
        }
    }
})
export default PackageSchema;