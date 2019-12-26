
import {PackageService} from '../services';

const packageService = new PackageService();
const PackageRouter = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return h.response({
                statusCode: 2090,
                message: 'hello word',
            }).code(200);
        }

}
]
export default PackageRouter;
