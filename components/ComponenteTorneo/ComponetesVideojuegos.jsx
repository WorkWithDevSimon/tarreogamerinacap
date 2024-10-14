import { NavLink } from "react-router-dom";
import "./Torneo.css"

export const ComponetesVideojuegos = ({ VideojuegoDatos }) => {
    VideojuegoDatos.forEach(imageSrc => {
        if (!localStorage.getItem(imageSrc)) {
            localStorage.setItem(imageSrc, imageSrc);
        }
    });
    return (
        <>
            <section className="classComponetesVideojuegos">
                {VideojuegoDatos.map((imageSrc, index) => (
                    <img
                        key={index}
                        src={localStorage.getItem(imageSrc) || imageSrc} // Carga de localStorage
                        alt={`Fondo Tarreo ${index + 1}`}
                    />
                ))}
                <NavLink to='/Cronograma' className="btn_cronograma">
                    ¡Ve al Cronograma!
                </NavLink>
            </section>
        </>
    );
};
