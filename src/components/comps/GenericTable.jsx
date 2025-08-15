import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/GenericTable.css";

const GenericTable = ({ sampleData }) => {
  console.log(sampleData);
  return (
    <div>
      <table className=" mt-2 generic-table table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Commands</th>
            <th>#</th>
            <th>ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Updated Date</th>
            <th>Added By</th>
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
                  <td>{item.productName}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td className="image-cell">
                    <img className="table-img" src={item.photoURL} alt="" />
                  </td>
                  <td>{new Date(item.updatedAt).toISOString().slice(0, 16)}</td>
                  <td>{item.addedBy}</td>
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

export default GenericTable;
