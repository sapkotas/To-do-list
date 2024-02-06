// Importing necessary dependencies and components
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
import { useRef } from "react";

const AddToDo = () => {
  const todoText = useRef();

  const navigate = useNavigate();

  // Function to handle the form submission and add a new to-do item
  const addToDo = (e) => {
    // Preventing the default form submission behavior
    e.preventDefault();

    // Extracting the to-do text from the input field using the ref
    const todoString = todoText.current.value;

    // Retrieving existing to-do items from local storage or initializing an empty array
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    // Adding the new to-do item to the array
    initialTodo.push(todoString);

    // Storing the updated to-do items back in local storage
    localStorage.setItem("todo", JSON.stringify(initialTodo));

    navigate("/"); // Using the 'navigate' function to redirect to the home page ("/")
  };

  return (
    <>
      <NavBar /> {/* Rendering the NavBar component */}
      <div className="todo_container">
        <form onSubmit={addToDo}>
          Add to-do:
          <br />
          <input type="text" ref={todoText} />
          <button type="submit">Save To-Do</button>
        </form>
      </div>
    </>
  );
};

// Exporting the AddToDo component as the default export
export default AddToDo;
