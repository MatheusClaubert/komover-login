"use client";
import React, { useState } from "react";
import { FaEye, FaToggleOn, FaToggleOff, FaTimes, FaEdit } from "react-icons/fa";
import PatientFilter from "./PatientFilter";

type Patient = {
  id: number;
  name: string;
  cpf: string;
  sus: string;
  age: number;
  active: boolean;
};

const initialPatients: Patient[] = [
  { id: 1, name: "João Silva", cpf: "123.456.789-00", sus: "987654321", age: 45, active: true },
  { id: 2, name: "Maria Oliveira", cpf: "987.654.321-00", sus: "123456789", age: 52, active: false },
  { id: 3, name: "Carlos Pereira", cpf: "456.789.123-00", sus: "456123789", age: 37, active: true },
];

const PatientTable: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleStatus = (id: number) => {
    setPatients(prev =>
      prev.map(patient =>
        patient.id === id ? { ...patient, active: !patient.active } : patient
      )
    );
  };

  const filteredPatients = patients.filter((patient) =>
    Object.values(patient)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 text-emerald-700 relative">
      <h2 className="text-xl font-semibold mb-4">Pacientes</h2>

      {/* Filtro genérico */}
      <PatientFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <table className="min-w-full table-fixed border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-300 px-4 py-2 text-left">CPF</th>
            <th className="border border-gray-300 px-4 py-2 text-left">SUS</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Idade</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Status</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Ação</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id} className="text-sm text-gray-700">
              <td className="border border-gray-300 px-4 py-2">{patient.name}</td>
              <td className="border border-gray-300 px-4 py-2">{patient.cpf}</td>
              <td className="border border-gray-300 px-4 py-2">{patient.sus}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{patient.age}</td>
              <td className={`border border-gray-300 px-4 py-2 font-bold text-center ${patient.active ? "text-green-600" : "text-red-600"}`}>
                {patient.active ? "Ativo" : "Inativo"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center gap-6">
                  <button
                    onClick={() => toggleStatus(patient.id)}
                    title={patient.active ? "Inativar" : "Ativar"}
                    className="flex flex-col items-center text-sm text-gray-700 hover:text-gray-900"
                  >
                    {patient.active ? (
                      <FaToggleOn className="text-green-500 text-xl" />
                    ) : (
                      <FaToggleOff className="text-red-500 text-xl" />
                    )}
                    <span>{patient.active ? "Inativar" : "Ativar"}</span>
                  </button>

                  <button
                    onClick={() => setSelectedPatient(patient)}
                    title="Visualizar"
                    className="flex flex-col items-center text-sm text-gray-700 hover:text-gray-900"
                  >
                    <FaEye className="text-blue-500 text-xl" />
                    <span>Ver</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de detalhes */}
      {selectedPatient && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className={`bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative ${!selectedPatient.active ? "border-red-500 border-4" : ""}`}>
            <button
              onClick={() => setSelectedPatient(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
            >
              <FaTimes />
            </button>
            <h3 className="text-2xl font-semibold mb-4">Detalhes do Paciente</h3>
            <p><strong>Nome:</strong> {selectedPatient.name}</p>
            <p><strong>CPF:</strong> {selectedPatient.cpf}</p>
            <p><strong>SUS:</strong> {selectedPatient.sus}</p>
            <p><strong>Idade:</strong> {selectedPatient.age}</p>
            <p className="font-bold">
              <strong>Status:</strong> {selectedPatient.active ? "Ativo" : "Inativo"}
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => toggleStatus(selectedPatient.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                {selectedPatient.active ? "Inativar" : "Ativar"}
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
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
