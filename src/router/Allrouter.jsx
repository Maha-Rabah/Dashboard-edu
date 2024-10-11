import App from "../App";
import { DashboardOppRoute } from "../modules/Opp/router/DashboardOppRoute";
import { DashboardTeamRoute } from "../modules/Team/router/DashboardTeamRoute";
import { DashboardEpiRoute } from "../modules/Episodes/router/DashboardEpiRoute";
import Dashboard from "../pages/Dashboard";
import { DashboardStatsRoute } from "../modules/Stats/router/DashboardStatsRoute";
import Home from "../components/Home/Home";
import { DashboardBlogRoute } from "../modules/Blog/router/DashboardBlogRoute";
import {DashboardFormRoute} from "../modules/Forms/router/DashboardFormRoute"


export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      ...DashboardOppRoute,
      ...DashboardTeamRoute,
      ...DashboardEpiRoute,
      ...DashboardStatsRoute,
      ...DashboardFormRoute,
      ...DashboardBlogRoute,
    ],
  },
];