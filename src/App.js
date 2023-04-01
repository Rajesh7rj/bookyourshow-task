import "./App.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Booking from "./components/Booking.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path="/show-details" element={<ShowDetails />} />
        <Route path="/booking" element={<Booking/>}/>
      </Routes>
    </div>
  );
}
export default App;
