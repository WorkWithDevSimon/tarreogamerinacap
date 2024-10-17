
export const ComponenteBasesDelTorneo2 = ({ baseMitosYLeyendas }) => {
    return (
        <div className="torneos-container">
            <div className="torneo-card">
                <h1 className="titulo_base">Bases del torneo de {baseMitosYLeyendas.nombre}</h1>

                <h2>Formato</h2>
                <p>Modo de Clasificación: {baseMitosYLeyendas.formato.modoClasificacion}</p>
                <ul>
                    {baseMitosYLeyendas.formato.detalles.map((detalle, index) => (
                        <li key={index}>{detalle}</li>
                    ))}
                </ul>

                <h2>Reglas de Construcción de Mazos</h2>
                <ul>
                    {baseMitosYLeyendas.reglasConstruccionMazos.map((regla, index) => (
                        <li key={index}>{regla}</li>
                    ))}
                </ul>

                <h2>Inspección de Mazos</h2>
                <ul>
                    {baseMitosYLeyendas.inspeccionMazos.map((inspeccion, index) => (
                        <li key={index}>{inspeccion}</li>
                    ))}
                </ul>

                <h2>Jueces y Resolución</h2>
                <ul>
                    {baseMitosYLeyendas.juecesYResolucion.map((jueces, index) => (
                        <li key={index}>{jueces}</li>
                    ))}
                </ul>

                <h2>Reglas Generales</h2>
                <ul>
                    {baseMitosYLeyendas.reglasGenerales.map((reglaGeneral, index) => (
                        <li key={index}>{reglaGeneral}</li>
                    ))}
                </ul>

                <h2>Otras Consideraciones</h2>
                <ul>
                    {baseMitosYLeyendas.otrasConsideraciones.map((consideracion, index) => (
                        <li key={index}>{consideracion}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
