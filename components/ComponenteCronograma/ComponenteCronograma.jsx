import "./ComponenteCronograma.css";

export const ComponenteCronograma = ({ CompetidoresPlataforma, Recuerdo }) => {
  return (
    <>
      <section className="cronogramacontenedor">
        <table className="cronogramatabla">
          <thead>
            <tr>
              <th className="cronogramacabezera">Juego</th>
              <th className="cronogramacabezera">Plataforma</th>
              <th className="cronogramacabezera">Hora</th>
              <th className="cronogramacabezera">Equipos</th>
            </tr>
          </thead>
          <tbody>
            {CompetidoresPlataforma.map((juego, index) => (
              <tr key={index}>
                <td className="cronogramaParteDeTd" data-header="Juego">{juego.nombre}</td>
                <td className="cronogramaParteDeTd" data-header="Plataforma">{juego.plataforma}</td>
                <td className="cronogramaParteDeTd" data-header="Hora">{juego.hora}</td>
                <td className="cronogramaParteDeTd" data-header="Equipos">
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
        <p className="cronogramanota">
          {Recuerdo}
        </p>
      </section>
    </>
  );
};

