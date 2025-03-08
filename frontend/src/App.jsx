import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Create from "./pages/create";
import Update from "./pages/update"
import Dashboard from "./pages/dashboard"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
