import { observadorIntersecciones } from "../../hook/observadorIntersecciones";
import "./Torneo.css";

export const ComponenteCompetidores = ({ competidores, competicionImg, agregarClassecompetidores, agregarClasseanimate }) => {
    const { isVisible, objetivoRef } = observadorIntersecciones();

    return (
        <>
            <section
                className={`${agregarClassecompetidores} ${isVisible ? agregarClasseanimate : ''}`}
                ref={objetivoRef}
            >
                <img
                    src={competicionImg}
                    className="img_competicion"
                    alt="Imagen del juego de la competicion"
                />

                {competidores.map((grupo, index) => (
                    <div className="competidores_info" key={index}>
                        <div className="aboutContenedor">
                            <p>Equipo {grupo.grupo}</p>
                        </div>
                        <div>
                            <p>Carrera {grupo.carrera}</p>
                        </div>
                        <ul>
                            <li>Integrantes</li>
                            {grupo.integrantes.map((integrante, i) => (
                                <li key={i}>{integrante}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </>
    );
};