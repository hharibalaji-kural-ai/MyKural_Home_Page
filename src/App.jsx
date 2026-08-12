import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Value from "./pages/Value";
import Products from "./pages/Products";
import Kural1Way from "./pages/Kural1Way";
import Kural2Way from "./pages/Kural2Way";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Value" element={<Value />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/kural-1-way" element={<Kural1Way />} />
      <Route path="/products/kural-2-way" element={<Kural2Way />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
