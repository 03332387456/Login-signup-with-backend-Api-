import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";


export default function AppRouter() {
  return (
    <Router>
      <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/" element={<Signup />} />
    </Routes>
    </Router>
  );
}