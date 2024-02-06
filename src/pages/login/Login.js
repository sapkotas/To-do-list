// Import necessary components and icons
import NavBar from "../NavBar"; 
import { FaRegEye } from "react-icons/fa"; 
import { CgOptions } from "react-icons/cg"; // Importing options icon
import { Link, Route, Routes, useNavigate } from "react-router-dom"; 


const Login = () => {
  const navigate = useNavigate(); 

  // Render Login component
  return (
    <>
      <NavBar /> {/* Render navigation bar component */}

      <div className="todo_container">
        {/* Conditional rendering based on login status */}
        {localStorage.getItem("loggedIn") ? (
          // Rendered when user is logged in
          <>
            You are already logged in!{" "}
            {/* Logout button */}
            <b
              onClick={() => {
                localStorage.removeItem("loggedIn"); // Remove logged-in status from local storage
                navigate("/"); // Navigate to home page
              }}
              style={{ color: "red", cursor: "pointer" }}
            >
              Logout
            </b>
          </>
        ) : (
          // Rendered when user is not logged in
          <>
            {/* Login button */}
            <button
              onClick={() => {
                alert("You are successfully logged in!");
                navigate("/", { replace: true }); // Navigate to home page, replacing current entry in history
                localStorage.setItem("loggedIn", true); // Set logged-in status in local storage
              }}
            >
              Login!
            </button>
            <br />
            <br />
            {/* Link to nested route */}
            <Link to="/login/showInfo">Nested Route | Show Info</Link>
            <br /> <br />
            <br />
            {/* Nested routing */}
            <Routes>
              <Route
                path="/showInfo"
                element={
                  // Rendered when navigating to /login/showInfo route
                  <div>
                    This is dummy login and doesnot communicate with server.
                  </div>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </>
  );
};


export default Login;
