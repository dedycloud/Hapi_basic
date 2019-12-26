import LocationRouter from "./location.route";
import PackageRouter from "./package.route";
import TransitionRouter from "./transition.route";
import LoginRoute from "./login.route";

export default [].concat(
    PackageRouter,
    LocationRouter,
    LoginRoute

)
