// 📌 dashboard/page.tsx
import React from "react";
import Sidebar from "@/app/components/dashboard/SideBar";
import Header from "@/app/components/dashboard/Header";
import StatsCards from "@/app/components/dashboard/StatsCards";


const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <StatsCards />
      </main>
    </div>
  );
};

export default DashboardPage;
