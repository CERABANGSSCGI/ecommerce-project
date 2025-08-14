import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Admin.css";
import SidebarAdmin from "../components/comps/SidebarAdmin";
import UsersTable from "../components/comps/UsersTable";
import { useEffect, useState } from "react";
import { api } from "../api";

const Users = () => {
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/get-users");
        const allUsers = res.data.Users;
        setFiltered(allUsers);
      } catch (err) {
        setError("Failed to fetch the Users.");
        console.error(error, err);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="main d-flex">
        <SidebarAdmin />
        <div className="offset"></div>
        <div className="background-admin d-flex flex-column align-items-center">
          <h1 className="mt-5">Users</h1>
          <div className="table-container">
            <UsersTable sampleData={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
