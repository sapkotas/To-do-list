// Import necessary hooks and components from React and React Router
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// Import custom components
import NavBar from "../NavBar";
import AuthCheck from "../middleware/AuthCheck";

const AddToDo = () => {
  // Initialize a reference to the input field for the to-do item
  const todoText = useRef();

  const navigate = useNavigate();

  // Perform authentication check. This is synchronous, but consider if it's the intended behavior.
  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const todoString = todoText.current.value; // Get the value of the to-do item from the input field

    // Retrieve existing to-dos from local storage or initialize an empty array
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    // Add the new to-do item to the existing list
    initialTodo.push(todoString);

    // Update local storage with the updated to-do list
    localStorage.setItem("todo", JSON.stringify(initialTodo));

    // Navigate the user back to the home page after adding the to-do item
    navigate("/");
  };

  // Render NavBar component and form for adding a to-do item
  return (
    <>
      <NavBar /> {/* Render navigation bar component */}
      <div className="todo_container">
        <h1>Add to-do:</h1> <br /> {/* Header for adding to-do item */}
        {/* Form for adding to-do item */}
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />{" "}
          {/* Input field for the to-do item */}
          <button>Save to-do</button> {/* Button to save the to-do item */}
        </form>
      </div>
    </>
  );
};

export default AddToDo;
