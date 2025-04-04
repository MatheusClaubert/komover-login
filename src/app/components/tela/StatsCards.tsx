// 📌 dashboard/components/StatsCards.tsx
import React from "react";
import { FaUsers, FaCalendarCheck, FaClock } from "react-icons/fa";

const StatsCards = () => {
  return (
    <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
      {/* Total de Pacientes */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-emerald-500 flex items-center gap-4 hover:shadow-lg transition">
        <div className="bg-emerald-100 p-3 rounded-full">
          <FaUsers className="text-emerald-600 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Total de Pacientes</h3>
          <p className="text-2xl font-bold">3</p>
        </div>
      </div>

      {/* Agendamentos do Dia */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-indigo-500 flex items-center gap-4 hover:shadow-lg transition">
        <div className="bg-indigo-100 p-3 rounded-full">
          <FaCalendarCheck className="text-indigo-600 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Agendamentos do Dia</h3>
          <p className="text-2xl font-bold">8</p>
        </div>
      </div>

      {/* Sessões Pendentes */}
      <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500 flex items-center gap-4 hover:shadow-lg transition">
        <div className="bg-yellow-100 p-3 rounded-full">
          <FaClock className="text-yellow-600 text-xl" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Sessões Pendentes</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>
    </section>
  );
};

export default StatsCards;
