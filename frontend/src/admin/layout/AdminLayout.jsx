import react from "react";
import AdminNavigation from "../components/AdminNavigation.jsx";

import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <AdminNavigation />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
