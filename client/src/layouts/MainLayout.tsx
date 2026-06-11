import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ContentWrapper from "../components/layout/ContentWrapper";


function MainLayout(){
  return (
  <div className="min-h-screen flex flex-col">
    <Navbar />

    <div className="flex flex-1">
      <Sidebar />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </div>
  </div>
);
}

export default MainLayout;