import LoginService from "../services/login.service";

const loginService = new LoginService();

const LoginRoute =[{
    method:'POST',
    path:'/login',
    handler:async (req)=>{
        const data = req.payload;
        await loginService.createPassword(data)
        return data;
    }
},
    {
        method: 'POST',
        path: '/logins',
        handler:(req )=>{
            return loginService.login(req.payload);
        }
    },
    {
        method: 'GET',
        path: '/login/{id}',
        config: {
            auth:'simple',
            handler: async (req, h) => {
                const {params} = req;
                const login = await loginService.findByUsername(params.id);
                return login;

            }
        }
    }

]

export default LoginRoute;