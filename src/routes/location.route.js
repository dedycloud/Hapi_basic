import {LocationService} from "../services";
import Boom from "@hapi/boom"
import Joi from "@hapi/joi"

const locationService = new LocationService();
const LocationRouter = [
    {
        method: 'POST',
        path: '/location',
        config:{
            handler: async (req, h) => {
                let location = req.payload;
                location = await locationService.createLocation(location)
                if (!location) {
                    throw  Boom.notFound('customer not found');
                } else {
                    return location;
                }

            },
            validate:{
                payload: {
                    name: Joi.string().min(1).max(140).required(),
                    address: Joi.string().max(14).required()
                    // date: Joi.date().required()

                }
            }
        }


    },
    {
        method: 'GET',
        path: '/location',
        config: {
            handler: async (req, h) => {
                const location = await locationService.findAllLocation();
                if (!location) {
                    throw  Boom.notFound('customer not found');
                } else {
                    return location;
                }

            }

        }
    },
    {
        method: 'PUT',
        path: '/locations',
        config: {
            handler: async (req, h) => {
                let location = req.payload;
             //   console.log(location.id)
                location = await locationService.updateLocation(location);
                return location;
            }

        }
    }
    , {
        method: 'GET',
        path: '/location/{id}',
        config: {
            handler: async (req, h) => {
                const {params} = req;
                const locationById = await locationService.findLocationById(params.id);
                // if (!locationById) {
                //     throw  Boom.notFound('customer not found');
                // } else {
                    return locationById;
            //    }
            }
        }
    }
]

export default LocationRouter;