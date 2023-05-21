import { Outlet } from "react-router-dom";
import HomeNavbar from "@components/HomeNavbar";
import Footer from "@components/Footer";

export default function HomeLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col w-full bg-black">
        <HomeNavbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
