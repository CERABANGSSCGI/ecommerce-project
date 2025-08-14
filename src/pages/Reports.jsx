import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Admin.css";
import SidebarAdmin from "../components/comps/SidebarAdmin";

const Reports = () => {
  return (
    <div>
      <div className="main d-flex">
        <SidebarAdmin />
        <div className="offset"></div>
        <div className="background-admin d-flex flex-column align-items-center">
          <h1 className="mt-5">Reports</h1>
          <div className="table-container">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
