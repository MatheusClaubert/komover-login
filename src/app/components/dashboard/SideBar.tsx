// 📌 dashboard/components/Sidebar.tsx
import React from "react";

const SideBar = () => {
  return (
    <aside className="w-64 bg-emerald-600 text-white p-4 h-screen">
      <h1 className="text-xl font-bold">Komover</h1>
      <nav className="mt-4">
        <ul>
          <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Cadastro</li>
          <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Agendamentos</li>
          <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Evolução</li>
          <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Configurações</li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
