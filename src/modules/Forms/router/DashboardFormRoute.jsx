import AddMembersForm from "../Addmember/Pages/AddMembersForms";
import AddEpisodesForm from "../AddEpisods/AddEpisodsForm"
import AddStatisticsForm from "../AddStatistics/AddStatisticsForm"
import {ROUTES} from "../constants/const";

export const DashboardFormTeamRoute = [
    {
      path: ROUTES.AddMembersForm,
      element: <AddMembersForm />,
    },
  ];

  export const DashboardFormEpisodeRoute = [
    {
      path: ROUTES.AddEpisodesForm,
      element: <AddEpisodesForm/>,
    },
  ];
  
    export const DashboardFormStatisticsRoute = [
      {
        path: ROUTES.AddStatisticsForm,
        element: <AddStatisticsForm/>,
      },
  ];


