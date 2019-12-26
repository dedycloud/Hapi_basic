import {TransitionService} from '../services';
const transitionService = new TransitionService();
const TransitionRouter = [
    {
        method: 'GET',
        path: '/transition',
        handler: (req, h) => {
            return h.response({
                statusCode: 2090,
                message: 'hello word',
            }).code(200);
        }

    }
]

export default TransitionRouter;
