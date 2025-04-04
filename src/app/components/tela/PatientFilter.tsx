"use client";
import React from "react";

type PatientFilterProps = {
  searchTerm: string;
  onSearchChange: (value: string) => void;
};

const PatientFilter: React.FC<PatientFilterProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar paciente por qualquer campo..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded"
    />
  );
};

export default PatientFilter;
