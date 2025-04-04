// 📌 dashboard/components/Header.tsx
"use client";
import React, { useState } from "react";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center relative">
      <h2 className="text-lg font-semibold text-emerald-600">Dashboard</h2>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 text-emerald-950 font-medium focus:outline-none"
        >
          <FaUserCircle className="text-2xl text-emerald-800" />
          <span className="hidden sm:inline">Dra. Yanka Komora</span>
          <FaChevronDown className="text-xs" />
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <ul className="py-1 text-sm text-gray-700">
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => alert("Perfil")}
                >
                  Perfil
                </button>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => alert("Sair")}
                >
                  Sair
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
