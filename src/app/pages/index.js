import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import routes from "../routing/routes";
import { StartPage } from "./StartPage/StartPage";

const pages = {
    [routes[404]]: {
        component: NotFoundPage,
        isExact: true
    },
    [routes.home]: {
        component: StartPage,
        isExact: true
    },
    [routes.about]: {
        component: StartPage,
        isExact: true
    },
};

export default pages;