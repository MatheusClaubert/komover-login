// 📌 dashboard/components/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-emerald-600">Dashboard</h2>
      <div>
        <span className="text-emerald-950 ">Dra.Yanka Komora</span>
      </div>
    </header>
  );
};

export default Header;
