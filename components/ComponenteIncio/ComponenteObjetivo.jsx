 import './Inicio.css';
import { objetivoTarreoDatos } from "../../components/ComponenteIncio/indexinicio";
import { observadorIntersecciones } from "../../hook/observadorIntersecciones";

export const ComponenteObjetivo = () => {
    const { isVisible, objetivoRef } = observadorIntersecciones();

    return (
        <section className={`objetivos ${isVisible ? 'animate' : ''}`} ref={objetivoRef}>
            <div className='objetivo'>
                <div className="objetivo_text ">
                    <div className='container_acercaTarreoDatos'>
                        <h1>{objetivoTarreoDatos.titulo}</h1>
                        <p>{objetivoTarreoDatos.descripcion}</p>
                    </div>
                </div>
                <div className="objetivo_info">
                    <img src={objetivoTarreoDatos.imgAcerca} className="img_objetivo" alt="Imagen acerca de mí" />
                </div>
            </div>
        </section>
    );
};

