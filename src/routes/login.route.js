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
    }

]

export default LoginRoute;