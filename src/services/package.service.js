import {getRepository} from "typeorm";
import Package from "../models/package.model";
class PackageService {
    packageRepository(){
        return getRepository(Package);
    }
    async createPackage(packages){

        return await this.packageRepository().save(packages);
    }
    async updatePackage(packages){
        let packageToUpdate = await this.findPackageById(packages.id)
        this.packageRepository().merge(packageToUpdate,packages)
        return await this.packageRepository().save(packageToUpdate)
    }
    async findAllPackage(){
        return await this.packageRepository().find()
    }
    async findPackageById(id){
        let packages = await this.packageRepository().findOne(id)
        if (!packages) throw { message:"data package is not found",status:404 }
        return packages;
    }
    async deletePackage(id){
        let packages = await this.findPackageById(id)
        return await this.packageRepository().delete(packages)
    }
}
export default PackageService;