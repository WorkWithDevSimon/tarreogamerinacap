import "./ComponenteBasesDelTorneo.css";

export const ComponenteBasesDelTorneo = ({ baseFortnite, baseValorant, baseLeagueOfLegends }) => {
    const basesTorneos = [baseFortnite, baseValorant, baseLeagueOfLegends];
    return (
        <div className="torneos-container">
            {basesTorneos.map((torneo, index) => (
                <div className="torneo-card" key={index}>
                    <h2 className="titulo_base">{`Bases del torneo de ${torneo.nombre}`}</h2>
                    <h3>Descripción General</h3>
                    <ul>
                        {torneo.descripcion.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <h3>Fecha y Horario</h3>
                    <ul>
                        {torneo.fecha.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <h3>Premios</h3>
                    <ul>
                        {torneo.premios.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                    <h3>Reglas Específicas del Juego</h3>
                    <ul>
                        {torneo.reglas.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};
