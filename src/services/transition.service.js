import {getRepository} from "typeorm";
import Transition from "../models/transition.model";
import {LocationService, PackageService} from "./index";

const locationService = new LocationService();
const packageService = new PackageService();
class TransitionService {
    transitionRepository() {
        return getRepository(Transition);
    }
       async createTransition (transition){
        transition.packageItem = await packageService.findPackageById(transition.packageItem);
        transition.location = await locationService.findLocationById(transition.location);
        return await this.transitionRepository().save(transition)
    }

    async findTransitionById(id){
        let transition = await this.transitionRepository().findOne(id)
        if (!transition) throw {message:"data transition is not found", status:404}
        return transition;
    }
    async updateTransition(transition){
        let transitionToUpdate = await this.findTransitionById(transition.id)
        this.transitionRepository().merge(transitionToUpdate,transition)
        return await this.transitionRepository().save(transitionToUpdate)
    }
    async findAllTransition(){
        return await this.transitionRepository().find()
    }
    async deleteTransition(id){
        let transition = await this.findTransitionById(id)
        return await this.transitionRepository().delete(transition)
    }


}
export default TransitionService;