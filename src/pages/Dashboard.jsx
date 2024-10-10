import { Outlet } from "react-router-dom";
import "./dashboard.css";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="Mycontainer">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
