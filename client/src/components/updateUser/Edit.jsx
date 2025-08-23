import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./edit.css";
import { toast } from "react-hot-toast";
import axios from "axios";

const Edit = () => {
  const navigate = useNavigate();

  const users = {
    fname: "",
    lname: "",
    email: "",
  };

  const { id } = useParams();
  const [user, setUser] = useState(users);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://localhost:8000/api/update/${id}`, user)
        .then((res) =>
          toast.success(res.data.message, { position: "top-right" })
        );
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="addUser">
      <button className="backbtn" onClick={() => navigate("/")}>
        Back
      </button>
      <h3>Update User</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname"> First Name </label>
          <input
            type="text"
            value={user.fname}
            onChange={inputChangeHandler}
            id="fname"
            name="fname"
            placeholder="First Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="lname"> Last Name </label>
          <input
            type="text"
            value={user.lname}
            onChange={inputChangeHandler}
            id="lname"
            name="lname"
            placeholder="Last Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            value={user.email}
            onChange={inputChangeHandler}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <button type="submit" className="addUserBtn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
