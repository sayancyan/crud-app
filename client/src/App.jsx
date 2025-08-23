import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components/getUser/User.jsx";
import Add from "./components/addUser/add.jsx";
import Edit from "./components/updateUser/Edit.jsx";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <Add />,
    },
    {
      path: "/edit/:id",
      element: <Edit />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
