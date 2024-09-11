import ReactDOM from "react-dom/client";
import App from "./pages/Home.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import "./styles/index.css";
import Layout from "./components/Layout.tsx";
import Cart from "./pages/Cart.tsx";
import { store } from "./Redux/store.ts";
import { Provider } from "react-redux";
import { Toaster } from "@/components/ui/toaster";
import ContactUs from "./pages/ContactUs.tsx";
import CheckOut from "./pages/CheckOut.tsx";
import Orders from "./pages/Orders.tsx";
import Products from "./pages/Products.tsx";
import { ThemeProvider } from "./components/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/support" element={<ContactUs />} />
          <Route path="/product" element={<Products />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
