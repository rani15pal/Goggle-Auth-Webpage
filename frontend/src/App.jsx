import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Home */}
        <Route path="/" element={<Home />} />

         {/* 404 Route (IMPORTANT - must be last) */}
        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;