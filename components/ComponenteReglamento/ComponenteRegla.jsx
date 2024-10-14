import "./ComponenteRegla.css"
 

export const ComponenteRegla = ({reglasTorneo,SubituloReglas}) => {

    return (
        <>
            <section className="centrar-container">

                <div className="reglas-container">
                    <h2>{SubituloReglas}</h2>
                    <ul>
                        {reglasTorneo.map((regla, index) => (
                            <li key={index}>{regla}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};