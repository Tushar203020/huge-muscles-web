// Layout.js
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import TopHeader from "../components/TopHeader/TopHeader";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
