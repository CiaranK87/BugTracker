import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/homepage/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProjectDetails from "../../features/catalog/ProjectDetails";
import TicketPage from "../../features/tickets/TicketPage";
import Notifications from "../../features/notifications/Notifications";
import ServerError from "../api/errors/ServerError";
import NotFound from "../api/errors/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProjectDetails /> },
      { path: "ticketpage", element: <TicketPage /> },
      { path: "notifications", element: <Notifications /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
