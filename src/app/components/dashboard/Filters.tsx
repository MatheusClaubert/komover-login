import React from 'react'

function Filters() {
  return (
    <section className="mt-4 grid grid-cols-3 gap-4 text-emerald-800">
      <div className="bg-white p-4 rounded shadow">Total de Pacientes</div>
      <div className="bg-white p-4 rounded shadow">Agendamentos do Dia</div>
      <div className="bg-white p-4 rounded shadow">Sessões Pendentes</div>
    </section>
  )
}

export default Filters