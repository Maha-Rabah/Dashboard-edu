import App from "../App";
import { DashboardOppRoute } from "../modules/Opp/router/DashboardOppRoute";
import { DashboardTeamRoute } from "../modules/Team/router/DashboardTeamRoute";
import { DashboardEpiRoute } from "../modules/Episodes/router/DashboardEpiRoute";
import Dashboard from "../pages/Dashboard";
import { DashboardStatsRoute } from "../modules/Stats/router/DashboardStatsRoute";
import { DashboardFormRoute } from "../modules/Forms/router/DashboardTeamRoute";
import Home from "../components/Home/Home";
import { DashboardBlogRoute } from "../modules/Blog/router/DashboardBlogRoute";

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
