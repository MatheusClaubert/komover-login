// 📌 dashboard/components/Sidebar.tsx
import React from "react";
import Footer from "../auth/Footer";// certifique-se que o caminho está correto

const SideBar = () => {
  return (
    <aside className="w-64 bg-emerald-600 text-white p-4 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-extrabold text-amber-50">Komover</h1>
        <nav className="mt-4">
          <ul>
            <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Cadastro</li>
            <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Agendamentos</li>
            <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Evolução</li>
            <li className="p-2 hover:bg-emerald-900 rounded cursor-pointer">Configurações</li>
          </ul>
        </nav>
      </div>

      {/* Parte inferior: botão sair e footer */}
      <div className="mt-6">
        <button className="w-full p-2 mt-2 bg-amber-500 hover:bg-amber-700 rounded text-white font-semibold">
          Sair
        </button>

        {/* Footer Component */}
        <div className="mt-4">
          <Footer />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
