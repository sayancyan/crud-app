import { useNavigate } from "react-router-dom";
import "./user.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

function User() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8000/api/getAll");
      setUsers(res.data.users);
    };
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/delete/${userId}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      toast.success("User deleted successfully", { position: "top-right" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="userTable">
      <button className="btn addBtn" onClick={() => navigate("/add")}>
        Add User
      </button>

      <table border={1} cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                {user.fname} {user.lname}
              </td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn editBtn"
                  onClick={() => navigate(`/edit/${user._id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn deleteBtn"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
