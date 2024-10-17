import './Inicio.css';
import { acercaTarreoDatos } from "../../components/ComponenteIncio/indexinicio";
import { observadorIntersecciones } from "../../hook/observadorIntersecciones";

export const ComponenteAcerca = () => {
    const { isVisible, objetivoRef } = observadorIntersecciones();
    return (
        <section
            className={`about ${isVisible ? 'animate' : ''}`}  // Aplica la clase 'animate' al hacerse visible
            ref={objetivoRef}
        >
            <img src={acercaTarreoDatos.imgAcerca} className="img_about" alt="Imagen about" />
            <div className="about_info">
                <div className='aboutContenedor'>
                    <h1>{acercaTarreoDatos.titulo}</h1>
                </div>
                <p>{acercaTarreoDatos.descripcion}</p>

            </div>
        </section>
    );
};
