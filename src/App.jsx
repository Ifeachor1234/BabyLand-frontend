import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import Shop from "./pages/Shop/Shop";
import LikesPage from "./pages/Views/LikesPage";
import ProductPage from "./pages/Vercel/ProductPage";
import ShoppingCart from "./pages/Cart/ShoppingCart";
import Export from "./pages/Export/Export";
import Blog from "./pages/Storybook/Blog";

import FAQS from "./pages/Messages/FAQS";
import Register from "./pages/Secure/Register";
import Log from "./pages/Log/Log";
import Error from "./pages/Error/Error";
import { Mail } from "./pages/Mail/Mail";
import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/export" element={<Export />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/faqs" element={<FAQS />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Log />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
