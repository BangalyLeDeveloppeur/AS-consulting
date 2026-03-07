import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../components/Authentification.jsx";

const AdminNavigation = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handLogout = () => {
    setToken(null);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    navigate("/admin");
  };

  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/admin/pageadmin/homeadmin"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <li>HOME</li>
        </NavLink>

        <NavLink
          to="/admin/pageadmin/aproposadmin"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <li>A PROPOS</li>
        </NavLink>

        <NavLink
          to="/admin/pageadmin/services"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          <li>Services</li>
        </NavLink>
      </ul>

      <button onClick={handLogout}>Déconnexion</button>
    </div>
  );
};

export default AdminNavigation;