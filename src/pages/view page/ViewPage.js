import { Link, useNavigate, useParams } from "react-router-dom";

import AuthCheckBoolean from "../middleware/AuthcheckBoolean";

import NavBar from "../NavBar";

const ViewPage = () => {
  const navigate = useNavigate();
  const getParams = useParams(); // Retrieve URL parameters
  const getID = getParams.id; // Get the ID from URL parameters
  const getStorage = localStorage.getItem("todo") // Retrieve to-do list from local storage or initialize an empty array
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getData = getStorage[getID]; // Get the to-do item corresponding to the ID

  // Function to delete the to-do item
  const deleteTodo = () => {
    getStorage.splice(getID, 1); // Remove the to-do item from the array

    localStorage.setItem("todo", JSON.stringify(getStorage)); // Update local storage with the modified array

    navigate("/", { replace: true }); // Navigate back to the home page
  };

  return (
    <>
      <NavBar /> {/* Render navigation bar component */}
      <div className="todo_container">
        {/* Button to go back */}
        <button
          onClick={() => {
            navigate("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go Back
        </button>
        {/* Display the to-do item */}
        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {getData}
        </div>

        {/* Conditional rendering based on authentication status */}
        {AuthCheckBoolean() ? (
          // Rendered when user is authenticated
          <>
            <button style={{ background: "red" }} onClick={deleteTodo}>
              {" "}
              Delete To-do
            </button>
          </>
        ) : (
          // Rendered when user is not authenticated
          <>
            <p>
              Login to see more options <Link to="/login">Login now!</Link>
            </p>
          </>
        )}
      </div>
    </>
  );
};

export default ViewPage;


  /*// Query parse...

  // const getLocation = useLocation();

  // const getURLParams = new URLSearchParams(getLocation.search);

  // const getID = getURLParams.get("id");

  // console.log(getID);

  // const getData = getStorage[getID];

  // console.log(getLocation.search); */
