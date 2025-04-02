"use client";
import React, { useState } from "react";
import { FaEye, FaToggleOn, FaToggleOff, FaTrash, FaTimes, FaEdit } from "react-icons/fa";

const initialPatients = [
  { id: 1, name: "João Silva", cpf: "123.456.789-00", sus: "987654321", age: 45, active: true },
  { id: 2, name: "Maria Oliveira", cpf: "987.654.321-00", sus: "123456789", age: 52, active: false },
  { id: 3, name: "Carlos Pereira", cpf: "456.789.123-00", sus: "456123789", age: 37, active: true },
];

const PatientTable = () => {
  const [patients, setPatients] = useState(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (id) => {
    setPatients((prevPatients) =>
      prevPatients.map((patient) =>
        patient.id === id ? { ...patient, active: !patient.active } : patient
      )
    );
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-emerald-700 relative">
      <h2 className="text-xl font-semibold mb-4">Pacientes</h2>
      <input
        type="text"
        placeholder="Buscar paciente..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Nome</th>
            <th className="border border-gray-300 px-4 py-2">CPF</th>
            <th className="border border-gray-300 px-4 py-2">SUS</th>
            <th className="border border-gray-300 px-4 py-2">Idade</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id} className="text-center">
              <td className={`border border-gray-300 px-4 py-2 ${!patient.active ? 'text-red-600' : 'text-green-600'}`}>{patient.name}</td>
              <td className={`border border-gray-300 px-4 py-2 ${!patient.active ? 'text-red-600' : 'text-green-600'}`}>{patient.cpf}</td>
              <td className={`border border-gray-300 px-4 py-2 ${!patient.active ? 'text-red-600' : 'text-green-600'}`}>{patient.sus}</td>
              <td className={`border border-gray-300 px-4 py-2 ${!patient.active ? 'text-red-600' : 'text-green-600'}`}>{patient.age}</td>
              <td className={`border border-gray-300 px-4 py-2 font-bold ${!patient.active ? 'text-red-600' : 'text-green-600'}`}>
                {patient.active ? "Ativo" : "Inativo"}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center gap-2">
                <button
                  onClick={() => toggleStatus(patient.id)}
                  className="text-xl p-1 rounded transition duration-300 hover:scale-110"
                  title={patient.active ? "Inativar" : "Ativar"}
                >
                  {patient.active ? (
                    <FaToggleOn className="text-green-500" />
                  ) : (
                    <FaToggleOff className="text-red-500" />
                  )}
                </button>
                <button
                  onClick={() => setSelectedPatient(patient)}
                  className="text-blue-500 text-xl p-1 rounded transition duration-300 hover:scale-110"
                  title="Visualizar"
                >
                  <FaEye />
                </button>
                <button className="text-red-500 text-xl p-1 rounded transition duration-300 hover:scale-110" title="Excluir">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPatient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className={`bg-white p-8 rounded-lg shadow-lg text-left max-w-3xl w-full relative ${!selectedPatient.active ? 'border-4 border-red-500' : ''}`}>
            <button
              onClick={() => setSelectedPatient(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-semibold mb-4">Detalhes do Paciente</h3>
            <p className={`${!selectedPatient.active ? 'text-red-600' : 'text-green-600'}`}><strong>Nome:</strong> {selectedPatient.name}</p>
            <p className={`${!selectedPatient.active ? 'text-red-600' : 'text-green-600'}`}><strong>CPF:</strong> {selectedPatient.cpf}</p>
            <p className={`${!selectedPatient.active ? 'text-red-600' : 'text-green-600'}`}><strong>SUS:</strong> {selectedPatient.sus}</p>
            <p className={`${!selectedPatient.active ? 'text-red-600' : 'text-green-600'}`}><strong>Idade:</strong> {selectedPatient.age}</p>
            <p className={`font-bold ${!selectedPatient.active ? 'text-red-600' : 'text-green-600'}`}>
              <strong>Status:</strong> {selectedPatient.active ? "Ativo" : "Inativo"}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => toggleStatus(selectedPatient.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                {selectedPatient.active ? "Inativar" : "Ativar"}
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                <FaEdit className="inline mr-2" /> Editar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientTable;
