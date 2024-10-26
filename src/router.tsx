import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import NotFound from "./pages/error/NotFound";
import HeroesLineup from "./pages/heroes/line-up";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/heroes/line-up/:saveString?",
        element: <HeroesLineup />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;