import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Purchase from "./pages/Purchase";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ScrollToTop from "./components/ui/ScrollToTop"; // make sure the path is correct
import AddFunds from "./pages/AddFunds";
import Payment from "./pages/Payment";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<Products />} />
        <Route path="/addfund" element={<AddFunds />} />
        <Route path="/pay/:amount" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default Routing;
