import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Admin.css";
import SidebarAdmin from "../components/comps/SidebarAdmin";
import GenericTable from "../components/comps/GenericTable";

const Inventory = () => {
  const sampleData = [
    { id: 1, name: "Barako Beans", price: 250, stock: 10 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
    { id: 2, name: "Arabica Beans", price: 300, stock: 5 },
  ];

  return (
    <div>
      <div className="main d-flex">
        <SidebarAdmin />
        <div className="offset"></div>
        <div className="background-admin d-flex flex-column align-items-center">
          <h1 className="mt-5">Inventory</h1>
          <div className="table-container">
            <div className="command-buttons">
              <button className="btn">Add Item</button>
            </div>
            <GenericTable sampleData={sampleData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
