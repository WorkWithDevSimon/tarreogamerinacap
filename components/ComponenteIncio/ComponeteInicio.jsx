import { DatosInicio } from "../../components/ComponenteIncio/indexinicio";
import './Inicio.css';

export const ComponeteInicio = () => {
    return (
        <>
            <section className='div_inicio'>
                <img src={DatosInicio.imgMain} alt="Fondo Tarreo" className="background-image" />
                <h1 className='titulo'>{DatosInicio.titulo}</h1>
                <div className='button_container'>
                    <button className='boton'>
                        <a href={DatosInicio.botonUrl}>{DatosInicio.botonTexto}</a>
                    </button>
                </div>
            </section>
        </>
    );
};