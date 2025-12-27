import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home.page";
import Login from "./pages/login.page";
import Register from "./pages/register.page";
import GlobalErrorPage from "./pages/GlobalErrorHandler";
import Board from "./pages/TicketBoards";
import TicketDetails from "./pages/Tickets";
import Profile from "./pages/Profile";
import ManagerDashboard from "./pages/ManagerDashboard";
import DashboardOverview from "./pages/Overview";
import SprintPlanning from "./pages/SprintPlanning";
import SprintCreateEdit from "./pages/CreateSprint";
import CreateTicket from "./pages/CreateTickets";
import TeamCapacity from "./pages/TeamCapacity";
import Reports from "./pages/Reports";
import Settings from "./pages/settings";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <GlobalErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tickets-board",
        element: <Board />,
      },
      {
        path: "/ticket/:id",
        element: <TicketDetails />,
      },
      {
        path: "/dashboard",
        element: <Profile />,
      },
      {
        path: "/manager-dashboard",
        element: <ManagerDashboard />,
        children: [
          {
            path: "/manager-dashboard",
            element: <DashboardOverview />,
          },
          {
            path: "/manager-dashboard/sprint-plan",
            element: <SprintPlanning />,
          },
          {
            path: "/manager-dashboard/create-sprint",
            element: <SprintCreateEdit />,
          },

          {
            path: "/manager-dashboard/create-ticket",
            element: <CreateTicket />,
          },
          {
            path: "/manager-dashboard/team-capacity",
            element: <TeamCapacity />,
          },
          {
            path: "/manager-dashboard/report",
            element: <Reports />,
          },
          
        ],
        
      },
      {
        path: "/manager-dashboard/setting",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);
