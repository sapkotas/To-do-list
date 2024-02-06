import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddToDo from "../pages/add-todo/AddToDo";

import MainPage from "../pages/mainPage/MainPage";
import Login from "../pages/notfound/login/Login";
import ViewPage from "../pages/view page/ViewPage";
import NotFound from "../pages/notfound/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />

        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<MainPage />} />

        <Route path="/add" element={<AddToDo />} />

        <Route path="/login/*" element={<Login />} />

        <Route path="/view/:id" element={<ViewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
