import "./Fotogalería.css"
import { ComponenteFotoGaleria } from "../../components/ComponenteFotoGaleria/ComponenteFotoGaleria"


const imagenes2024 = import.meta.glob('../../img/imgFotoGaleria2024/*.(png|jpe?g|svg|jpeg|jpg)');
export const Fotogalería = () => {
    return (
        <>
            <h1 className="TitulofotoGaleria">Fotogaleria 2026</h1>
            <ComponenteFotoGaleria imagenes={imagenes2024}></ComponenteFotoGaleria>

            <h1 className="TitulofotoGaleria">Fotogaleria 2025</h1>
            <ComponenteFotoGaleria imagenes={imagenes2024}></ComponenteFotoGaleria>

            <h1 className="TitulofotoGaleria">Fotogaleria 2024</h1>
            <ComponenteFotoGaleria imagenes={imagenes2024}></ComponenteFotoGaleria>
        </>
    )
}
