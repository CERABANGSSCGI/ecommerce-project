import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/UsersTable.css";

const UsersTable = ({ sampleData }) => {
  return (
    <div>
      <table className=" mt-2 generic-table table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Commands</th>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.length > 0 ? (
            sampleData.map((item, index) => {
              return (
                <tr>
                  <td className="command-buttons">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </td>
                  <td>{index + 1}</td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>{item.photoURL}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                {" "}
                No Data Fetched
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
