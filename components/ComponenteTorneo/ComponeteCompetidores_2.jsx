import "./Torneo.css";
import { observadorIntersecciones } from "../../hook/observadorIntersecciones";

export const ComponeteCompetidores_2 = ({ competidores, competicionImg,
    agregarClassecompetidores, agregarClasseanimate }) => {
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
                {/* Mostrar cada grupo y sus integrantes */}
                {competidores.map((grupo, index) => (
                    <div className="competidores_info" key={index}>
                        <div className="aboutContenedor">
                            <p>{grupo.grupo}</p>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
};
