// Importing necessary dependencies and components
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../NavBar";
import Login from "../login/Login";

// Functional component for the ViewPage
const ViewPage = () => {
  // Obtaining the 'navigate' function from React Router

  const navigate = useNavigate();
  const getParams = useParams();
  const getID = getParams.id;
  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getData = getStorage[getID];

  const deleteToDo = () => {
    getStorage.splice(getID, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));
    navigate("/", { replace: true });
  };

  return (
    <>
      {/* Rendering the NavBar component */}
      <NavBar />
      {/* This is view page */}
      {/* Container for the page content */}
      <div className="todo_container">
        {/* Button to go back */}
        <button
          // Setting up an onClick event handler for the button
          onClick={() => {
            // Using the 'navigate' function to redirect to the home page ("/")
            navigate("/");
          }}
          // Applying styles to the button using inline styles
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go back
        </button>
        <div
          style={{
            background: "#e7e7e7",

            fontSize: "20px",
            padding: "10px",
            margin: "10px",
          }}
        >
          {getData}
        </div>
        <button style={{ background: "red" }} onClick={deleteToDo}>
          {" "}
          Delete Todo
        </button>

        <Link to="/login" element={<Login />} />
      </div>
    </>
  );
};

// Exporting the ViewPage component as the default export
export default ViewPage;
