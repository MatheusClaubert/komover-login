import React from "react";
import Sidebar from "@/app/components/tela/SideBar";
import Header from "@/app/components/tela/Header";
import StatsCards from "@/app/components/tela/StatsCards";
import PatientTable from "@/app/components/tela/PatientTable"; // 🔹 Importa a Tabela

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6">
        <Header />
        <StatsCards />

        {/* 🔹 Adicionando a Tabela de Pacientes */}
        <section className="mt-6">
          <PatientTable />
        </section>

      </main>
    </div>
  );
};

export default DashboardPage;
