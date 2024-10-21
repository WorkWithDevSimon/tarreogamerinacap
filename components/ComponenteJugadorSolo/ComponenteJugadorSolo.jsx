import "./ComponenteJugadorSolo.css";

const jugadoresSoloLeague_of_Legends = [
  { carrera: "Analista Programador", integrantes: "Sergio Matamala" },
  { carrera: "Analista Programador", integrantes: "Cristóbal Solís" },
  { carrera: "Ingeniería en Informática", integrantes: "Efraín Guerrero" },
  { carrera: "Ingeniería Mecánica y Electromovilidad Automotriz", integrantes: "Benjamín Ríos" },
  { carrera: "Ingeniería en Mecánica y Electromovilidad Automotriz", integrantes: "Jeysson Martínez" },
  { carrera: "Telecomunicaciones", integrantes: "Sebastián Molina" },
  { carrera: "Ingeniería Eléctrica", integrantes: "Israel Núñez" },
  { carrera: "Diseño Digital y Web", integrantes: "Javiera Delgado" },
  { carrera: "Analista Programador", integrantes: "Daniel Bracho" },
  { carrera: "Automatización y Robótica", integrantes: "Miguel Bahamondes" },
  { carrera: "Analista y Programador", integrantes: "José Manuel Follert" },
  { carrera: "Ingeniería Informática", integrantes: "Rodrigo Mora" },
];

export const ComponenteJugadoresSolo = () => {
  return (
    <section className="jugadores-container">
      <h1>Jugadores de League of Legends</h1>
      <div className="tarjeta_jugador_Solo">
        <div className="jugadores-list">
          {jugadoresSoloLeague_of_Legends.map((jugador, index) => (
            <div className="jugador" key={index}>
              <div className="jugador-info">
                <h2 className="jugador-nombre">{jugador.integrantes}</h2>
                <p className="jugador-carrera">{jugador.carrera}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
