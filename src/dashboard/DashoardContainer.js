import { Outlet } from "react-router-dom";
import SideBar from "../components/dashboard/SideBar";
import "../components/dashboard/dashboard.css";
export default function DashboardContainer() {
  return (
    <div className="d-flex gap-2 mt-4  position-relative overflow-hidden dashboard-conteiner">
      <SideBar />
      <Outlet />
    </div>
  );
}
