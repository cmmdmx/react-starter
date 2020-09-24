import { NotFoundPage } from "./NotFoundPage/NotFoundPage";
import routes from "./routes";
import { StartPage } from "./StartPage/StartPage";

const pages = {
    [routes[404]]: NotFoundPage,
    [routes.home]: StartPage,
};

export default pages;