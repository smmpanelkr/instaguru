import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Purchase from "./pages/Purchase";
import Contact from "./pages/Contact";
import Products from "./pages/Products"; // Import the Products page

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<Products />} />{" "}
      </Routes>
    </Router>
  );
};

export default Routing;
