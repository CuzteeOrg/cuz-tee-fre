import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
// import CartPage from "./pages/CartPage";
// import CheckoutPage from "./pages/CheckoutPage";
// import LoginPage from "./pages/Login";
// import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        {/* <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
