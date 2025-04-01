import React from "react";

const AppointmentTable = ({ appointments, statusFilter, setStatusFilter }) => {
  const filteredAppointments = appointments.filter(a =>
    statusFilter ? a.status === statusFilter : true
  );

  return (
    <section className="mt-6 bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Bloco de Agendamentos</h3>
      <select
        className="border p-2 w-full mb-4"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="Confirmado">Confirmado</option>
        <option value="Pendente">Pendente</option>
      </select>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Paciente</th>
            <th className="border p-2">Data</th>
            <th className="border p-2">Horário</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((a, index) => (
            <tr key={index}>
              <td className="border p-2">{a.patient}</td>
              <td className="border p-2">{a.date}</td>
              <td className="border p-2">{a.time}</td>
              <td className="border p-2">{a.status}</td>
              <td className="border p-2 text-center">
                {a.status === "Pendente" ? (
                  <button className="bg-green-500 text-white px-2 py-1 rounded">Confirmar</button>
                ) : (
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">Reagendar</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AppointmentTable;