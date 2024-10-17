import "./Fotogalería.css"
import { ComponenteFotoGaleria } from "../../components/ComponenteFotoGaleria/ComponenteFotoGaleria"


const imagenes2024 = import.meta.glob('../../img/imgFotoGaleria2024/*.(png|jpe?g|svg|jpeg|jpg)');
const imagenes2025 = import.meta.glob('../../img/imgFotoGaleria2025/*.(png|jpe?g|svg|jpeg|jpg)');
const imagenes2026 = import.meta.glob('../../img/imgFotoGaleria2026/*.(png|jpe?g|svg|jpeg|jpg)');
export const Fotogalería = () => {
    return (
        <>
            <h1 className="TitulofotoGaleria">Fotogaleria 2026</h1>
            <ComponenteFotoGaleria imagenes={imagenes2024}></ComponenteFotoGaleria>

            <h1 className="TitulofotoGaleria">Fotogaleria 2025</h1>
            <ComponenteFotoGaleria imagenes={imagenes2025}></ComponenteFotoGaleria>

            <h1 className="TitulofotoGaleria">Fotogaleria 2024</h1>
            <ComponenteFotoGaleria imagenes={imagenes2026}></ComponenteFotoGaleria>
        </>
    )
}
