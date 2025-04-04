"use client";
import React, { useState } from "react";

const PatientDetails = ({ patient, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...patient });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">{isEditing ? "Editar Paciente" : "Detalhes do Paciente"}</h2>

        {isEditing ? (
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />

            <label className="block text-sm font-medium">CPF</label>
            <input
              type="text"
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />

            <label className="block text-sm font-medium">SUS</label>
            <input
              type="text"
              name="sus"
              value={formData.sus}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />

            <label className="block text-sm font-medium">Idade</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border p-2 rounded mb-2"
            />
          </div>
        ) : (
          <div>
            <p><strong>Nome:</strong> {patient.name}</p>
            <p><strong>CPF:</strong> {patient.cpf}</p>
            <p><strong>SUS:</strong> {patient.sus}</p>
            <p><strong>Idade:</strong> {patient.age}</p>
          </div>
        )}

        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Fechar
          </button>
          {isEditing ? (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditing(false)}
            >
              Salvar
            </button>
          ) : (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setIsEditing(true)}
            >
              Editar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
