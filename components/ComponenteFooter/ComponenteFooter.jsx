import './ComponenteFooter.css';
import { instagram, facebook } from "../../icon/indexicon";

export const ComponenteFooter = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer_conten">
                    <h2>
                        <span className='TituloFooter'>Tarreo Gamer Inacap Osorno</span>
                    </h2>

                    <div className="redes_sociales">
                        <a href="https://www.instagram.com/inacap_osorno/" target='_blank'>
                            <img src={instagram} alt="icono de instagram" />
                        </a>
                        <a href="https://www.facebook.com/iinacaposorno" target='_blank' >
                            <img src={facebook} alt="icono de facebook" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}
