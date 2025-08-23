import "./add.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();

  const users = {
    lname: "",
    email: "",
    password: "",
    fname: "",
  };
  const [user, setUser] = useState(users);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/create", user)
      .then(
        (res) => toast.success(res.data.message, { position: "top-right" }),
        navigate("/")
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="addUser">
      <button className="backbtn" onClick={() => navigate("/")}>
        Back
      </button>
      <h3>Add New User</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname"> First Name </label>
          <input
            type="text"
            onChange={inputHandler}
            id="fname"
            name="fname"
            placeholder="First Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="fname"> Last Name </label>
          <input
            type="text"
            onChange={inputHandler}
            id="lname"
            name="lname"
            placeholder="Last Name"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            onChange={inputHandler}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="inputGroup">
          <label htmlFor="fname"> Password </label>
          <input
            type="password"
            onChange={inputHandler}
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="inputGroup">
          <button type="submit" className="addUserBtn">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
