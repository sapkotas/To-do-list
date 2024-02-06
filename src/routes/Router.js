import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/view page/ViewPage";
import Login from "../pages/login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/addToDo" element={<AddToDo />} />
        {/* 
            Note: Changed the path for ViewPage to "/view/:id" assuming you want to pass an index or ID parameter.
            Adjust the path according to your requirements.
          */}
        <Route path="/view/:id" element={<ViewPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
