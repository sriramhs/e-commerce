import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import { Toaster } from "./components/ui/toaster";

const MainLayout = () => (
  <>
    <Layout />
    <Outlet />
    <Toaster />
  </>
);

export default MainLayout;
