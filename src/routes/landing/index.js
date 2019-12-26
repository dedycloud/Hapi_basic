const landing = {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
        return h.response({
            statusCode: 2090,
            message: 'hello word',
        }).code(200);
    }
};
export default landing;