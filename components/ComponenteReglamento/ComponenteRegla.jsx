import "./ComponenteRegla.css"
import { reglasTorneo } from './indexReglas'


export const ComponenteRegla = () => {

    return (
        <>
            <section className="centrar-container">

                <div className="reglas-container">
                    <h2>Reglas del tarreo gamer</h2>
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