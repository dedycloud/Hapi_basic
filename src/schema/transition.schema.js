import {EntitySchema} from "typeorm";
import Transition from "../models/transition.model";

const TransitionSchema = new EntitySchema({
    name:"Transition",
    target:Transition,
    tableName:"transition",
    columns:{
        id: {
            primary: true,
            type:"uuid",
            generated: "uuid"
        },
        date:{
            type:'date',
            nullable:false,
            default:()=>'CURRENT_TIMESTAMP'
        }
    },
    relations:{
        location:{
            target:"Location",
            type:"many-to-one",
            joinColumn:true,
            eager:true
        },
        packageItem:{
            target: "Package",
            type:"many-to-one",
            joinColumn: true,
            eager: false
        }
    }

});

export default TransitionSchema;