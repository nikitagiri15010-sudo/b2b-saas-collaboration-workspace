import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import WorkspacePage from "../pages/WorkspacePage";

function AppRoutes() {
  return (
    <Routes>
  <Route element={<MainLayout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard" element={<DashboardPage />} />
    <Route path="/workspace" element={<WorkspacePage />} />
  </Route>
</Routes>
  );
}

export default AppRoutes;