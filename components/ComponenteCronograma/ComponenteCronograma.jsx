import "./ComponenteCronograma.css";

export const ComponenteCronograma = ({ CompetidoresPlataforma, Recuerdo }) => {
  return (
    <>
      <section className="cronograma-container">
        <table className="cronograma-table">
          <thead>
            <tr>
              <th className="cronograma-header">Juego</th>
              <th className="cronograma-header">Plataforma</th>
              <th className="cronograma-header">Hora</th>
              <th className="cronograma-header">Equipos</th>
            </tr>
          </thead>
          <tbody>
            {CompetidoresPlataforma.map((juego, index) => (
              <tr key={index}>
                <td className="cronograma-cell" data-header="Juego">{juego.nombre}</td>
                <td className="cronograma-cell" data-header="Plataforma">{juego.plataforma}</td>
                <td className="cronograma-cell" data-header="Hora">{juego.hora}</td>
                <td className="cronograma-cell" data-header="Equipos">
                  {juego.equipos.map((equipo, i) => (
                    <div key={i}>
                      {equipo.nombre}  {equipo.rival}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="cronograma-note">
          {Recuerdo}
        </p>
      </section>
    </>
  );
};

