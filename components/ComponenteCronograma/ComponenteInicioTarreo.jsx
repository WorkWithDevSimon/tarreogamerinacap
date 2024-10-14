import "./ComponenteCronograma.css";



export const ComponenteInicioTarreo = ({ datosDelComiendoYfinalDelTarreo }) => {
    return (
        <section className="cronograma-container">
            <table className="cronograma-table">
                <thead>
                    <tr>
                        <th className="cronograma-header">Fecha de Inicio y Fecha de Fin</th>
                        <th className="cronograma-header">Hora de Inicio y Hora de Fin</th>
                    </tr>
                </thead>
                <tbody>
                    {datosDelComiendoYfinalDelTarreo.map((dato, index) => (
                        <tr key={index}>
                            <td className="cronograma-cell">{dato.fecha}</td>
                            <td className="cronograma-cell">{dato.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};
