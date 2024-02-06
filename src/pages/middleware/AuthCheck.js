import { useNavigate } from "react-router-dom";

// Define AuthCheck middleware function
const AuthCheck = () => {
  const navigate = useNavigate(); // Initialize navigate function to handle programmatic navigation

  // Check if user is logged in; if not, redirect to login page
  !localStorage.getItem("loggedIn") && navigate("/login", { replace: true });

  // Alternative approach :
  // Redirect to login page if user is not logged in
  // localStorage.getItem("loggedIn") ? (() => {})() : navigate("/login", { replace: true });
};

export default AuthCheck;
