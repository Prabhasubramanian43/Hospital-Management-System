import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Doctors from "./pages/Doctors";
import AddDoctor from "./pages/AddDoctor";
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;