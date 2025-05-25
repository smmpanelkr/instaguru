import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Purchase from "./pages/Purchase";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ScrollToTop from "./components/ui/ScrollToTop";
import AddFunds from "./pages/AddFunds";
import Payment from "./pages/Payment";
import Wallet from "./pages/Wallet";
import ReferPage from "./pages/Refer";

const Routing = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/refer" element={<ReferPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:slug" element={<Products />} />
        <Route path="/addfund" element={<AddFunds />} />
        <Route path="/payment/:token" element={<Payment />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/refer/:referralId" element={<ReferPage />} />
      </Routes>
    </Router>
  );
};

export default Routing;