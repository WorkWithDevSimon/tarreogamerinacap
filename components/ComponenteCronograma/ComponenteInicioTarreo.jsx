import "./ComponenteCronograma.css";

export const ComponenteInicioTarreo = ({ datosDelComiendoYfinalDelTarreo }) => {
    return (
        <section className="cronogramacontenedor">
            <table className="cronogramatabla">
                <thead>
                    <tr>
                        <th className="cronogramacabezera">Fecha de Inicio y Fecha de Fin</th>
                        <th className="cronogramacabezera">Hora de Inicio y Hora de Fin</th>
                    </tr>
                </thead>
                <tbody>
                    {datosDelComiendoYfinalDelTarreo.map((dato, index) => (
                        <tr key={index}>
                            <td className="cronogramaParteDeTd">{dato.fecha}</td>
                            <td className="cronogramaParteDeTd">{dato.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
