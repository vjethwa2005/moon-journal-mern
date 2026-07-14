import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";
import Signup from "../pages/public/Signup";
import Login from "../pages/public/Login";
import Dashboard from "../pages/private/Dashboard";
import WriteEntry from "../pages/private/WriteEntry";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/write" element={<WriteEntry />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;