import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import ContactUs from "./pages/ContactUs";
import App from "./pages/Home";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

export const routes = [
  { path: "/", element: <App /> },
  { path: "/cart", element: <Cart /> },
  { path: "/orders", element: <Orders /> },
  { path: "/checkout", element: <CheckOut /> },
  { path: "/support", element: <ContactUs /> },
  { path: "/product", element: <Products /> },
];
