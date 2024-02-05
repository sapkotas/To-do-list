import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav_bar">
        To-do v1
        <div className="menu_items">
          <Link to="/home">
            <div>Home</div>
          </Link>
          <Link to="/addToDo">
            <div>Add Todo</div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default NavBar;
