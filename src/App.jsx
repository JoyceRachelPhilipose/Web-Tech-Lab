import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <main className="container">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<StudentDetails />} />
        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;